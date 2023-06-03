import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import 'echarts-wordcloud'

export default class WordCloudDirector extends Component {
  WordOption = () => {
    let maskImage = new Image();
    maskImage.src = 'https://raw.githubusercontent.com/ecomfe/echarts-wordcloud/master/asset/gettysburg.jpg';
    let wrodDATA = [
      { text: 'Drama', value: 17700 },
      { text: 'Adventure', value: 6000 },
      { text: 'Crime', value: 5100 },
      { text: 'Action', value: 5000 },
      { text: 'Comedy', value: 4500 },
      { text: 'Mystery', value: 3100 },
      { text: 'Thriller', value: 3000 },
      { text: 'Biography', value: 2900 },
      { text: 'Animation', value: 2300 },
      { text: 'War', value: 2300 },
      { text: 'Romance', value: 2300 },
      { text: 'Sci-Fi', value: 2000 },
      { text: 'Fantasy', value: 1400 },
      { text: 'Family', value: 1300 },
      { text: 'History', value: 1000 },
      { text: 'Western', value: 700 },
      { text: 'Sport', value: 500 },
      { text: 'Horror', value: 500 },
      { text: 'Music', value: 400 },
      { text: 'Film-Noir', value: 400 },
      { text: 'Musical', value: 100 },
    ];
    let option = {
      backgroundColor: '#fff',
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      series: [
        {
          type: 'wordCloud',
          gridSize: 1,
          // Text size range which the value in data will be mapped to.
          // Default to have minimum 12px and maximum 60px size.
          sizeRange: [12, 55],
          //Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45
          rotationRange: [-45,0,45,90],
          maskImage: maskImage,
          textStyle: {
            normal: {
              color: function () {
                return 'rgb(' + [
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255),
                  Math.round(Math.random() * 255)
                ].join(',') + ')';
              }
            }
          },

          left: 'center',
          top: 'center',
          right: null,
          bottom: null,
          width: '90%',
          height: '110%',
          data: wrodDATA
        }
      ]
    };
    return option;
  };

  render() {
    return (
      <div style={{marginTop: '50px', width: "82"}}>  
        <Row>
          <Col md={24}>
            <ReactEcharts
              option={this.WordOption()}
              theme="ThemeStyle"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

