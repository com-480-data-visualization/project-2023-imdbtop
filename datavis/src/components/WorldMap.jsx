import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson';

const WorldMap = (props) => {
  const svgRef = useRef(null);
  const {
    world_type,
    selected_countries,
    height,
    width,
    css_style,
    orginal_country_color,
    clicked_country_color,
    selected_country_color,
    location,
    verbose,
  } = props;
  let current_subject = null;
  let countries = null;
  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);
    
    svg.selectAll('*').remove();
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };
      
    verbose && console.log('Init qb_worldmap');

    const qb_worldmap_style = `<style>
      .qb-worldmap-country {
        fill: #cccccc;
        stroke: #010000;
        stroke-width: .5px;
        stroke-linejoin: round;
      }
  
      .qb-worldmap-graticule {
        fill: none;
        stroke: #777;
        stroke-width: .5px;
        stroke-opacity: .5;
      }</style>`;

    document.head.insertAdjacentHTML('beforeend', css_style || qb_worldmap_style);
    console.log(height,width);
    const sensitivity = 75;
    const projection = d3.geoOrthographic().translate([width / 2, height / 2]);
    const org_scale = projection.scale();
    const path = d3.geoPath(projection);
    const graticule_lines = svg.append('path')
      .datum(d3.geoGraticule())
      .attr('class', 'qb-worldmap-graticule')
      .attr('d', path);
    console.log('render grid successfully!')
    const locationURL = location || 'https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json';

    svg.call(
      d3.drag().on('drag', (event) => {
        const rotate = projection.rotate();
        const k = sensitivity / projection.scale();
        projection.rotate([
          rotate[0] + event.dx * k,
          rotate[1] - event.dy * k,
        ]);
        svg.selectAll('path').attr('d', path);
      })
    ).call(
      d3.zoom().on('zoom', (event) => {
        projection.scale(org_scale * event.transform.k);
        svg.selectAll('path').attr('d', path);
      })
    );
    
    d3.select(window).on('resize', size_changed);
    fetch(locationURL)
      .then((response) => response.json())
      .then((world) => {
        verbose && console.log('Init qb_worldmap countries');
        countries = topojson.feature(world, world.objects.countries).features;
        svg.selectAll('.qb-worldmap-country')
          .data(countries)
          .enter()
          .insert('path', '.qb-worldmap-graticule')
          .attr('class', 'qb-worldmap-country')
          .attr('d', path)
          .style('fill', function (d) {
            return selected_countries.includes(d.id)
              ? selected_country_color
              : orginal_country_color;
          })
          .on('click', (d) => go_to_country(d.id));
      })
      .catch((error) => {
        verbose && console.log('Failed to fetch countries');
        verbose && console.error(error);
      });

    function go_to_country(country_code_3) {
      verbose && console.log(`Go to country ${country_code_3}`);
      if (countries != null) {
        const target_country = countries.find((obj) => {
          return obj.id === country_code_3;
        });
        if (typeof target_country !== 'undefined' && target_country) {
          const country = svg.selectAll('.qb-worldmap-country');
          country
            .transition()
            .style('fill', function (x, y) {
              if (x.id === target_country.id) {
                current_subject = x.id;
                return clicked_country_color;
              } else if (selected_countries.includes(x.id)) {
                return selected_country_color;
              }
              return orginal_country_color;
            });

          d3.transition()
            .delay(180)
            .duration(1500)
            .tween('rotate', function () {
              const point = d3.geoCentroid(target_country);
              const rotate = d3.interpolate(projection.rotate(), [-point[0], -point[1]]);
              return function (x) {
                projection.rotate(rotate(x));
                country.attr('d', path);
                graticule_lines.attr('d', path);
              };
            })
            .transition();
        }
      }
    }

    function size_changed() {
      const _width = svgRef.current.clientWidth;
      if (svg != null) {
        svg.attr('width', _width);
        projection.translate([_width / 2, height / 2]);
        svg.selectAll('path').attr('d', path);
      }
    }

    function get_current_subject() {
      return current_subject;
    }

    go_to_country.go_to_country = go_to_country;
    go_to_country.get_current_subject = get_current_subject;
  }, [props]);
  return (
    
    <div>
      <svg ref={svgRef}></svg>
    </div>
  )
}

export default WorldMap;
