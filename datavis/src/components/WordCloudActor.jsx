import React from 'react';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Robert De Niro', value: 9 },
  { text: 'Morgan Freeman', value: 7 },
  { text: 'Harrison Ford', value: 7 },
  { text: 'John Ratzenberger', value: 7 },
  { text: 'Leonardo DiCaprio', value: 6 },
  { text: 'Christian Bale', value: 6 },
  { text: 'Michael Caine', value: 6 },
  { text: 'Tom Hanks', value: 6 },
  { text: 'Robert Duvall', value: 5 },
  { text: 'Takashi Shimura', value: 5 },
  { text: 'Charles Chaplin', value: 5 },
  { text: 'Brad Pitt', value: 5 },
  { text: 'Alec Guinness', value: 5 },
  { text: 'Mark Ruffalo', value: 5 },
  { text: 'Clint Eastwood', value: 5 },
  { text: 'Al Pacino', value: 4 },
  { text: 'Joe Pesci', value: 4 },
  { text: 'Henry Bergman', value: 4 },
  { text: 'Jack Angel', value: 4 },
  { text: 'Willem Dafoe', value: 4 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

const WordCloudActor = () => {
  return (
    <WordCloud 
      data={data} 
      fontSizeMapper={fontSizeMapper} 
      rotate={rotate}
      onWordClick={(word) => alert(`You clicked on: ${word.text}`)}
    />
  );
};

export default WordCloudActor;
