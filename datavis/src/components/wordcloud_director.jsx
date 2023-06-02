import React from 'react';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Steven Spielberg', value: 7 },
  { text: 'Martin Scorsese', value: 7 },
  { text: 'Stanley Kubrick', value: 7 },
  { text: 'Christopher Nolan', value: 7 },
  { text: 'Akira Kurosawa', value: 7 },
  { text: 'Alfred Hitchcock', value: 6 },
  { text: 'Quentin Tarantino', value: 5 },
  { text: 'Charles Chaplin', value: 5 },
  { text: 'Billy Wilder', value: 5 },
  { text: 'Hayao Miyazaki', value: 4 },
  { text: 'Sergio Leone', value: 4 },
  { text: 'Joel Coen', value: 3 },
  { text: 'Frank Capra', value: 3 },
  { text: 'Francis Ford Coppola', value: 3 },
  { text: 'Peter Jackson', value: 3 },
  { text: 'Pete Docter', value: 3 },
  { text: 'Ingmar Bergman', value: 3 },
  { text: 'Ridley Scott', value: 3 },
  { text: 'David Fincher', value: 3 },
  { text: 'Clint Eastwood', value: 3 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

const InteractiveWordCloud = () => {
  return (
    <WordCloud 
      data={data} 
      fontSizeMapper={fontSizeMapper} 
      rotate={rotate}
      onWordClick={(word) => alert(`You clicked on: ${word.text}`)}
    />
  );
};

export default InteractiveWordCloud;
