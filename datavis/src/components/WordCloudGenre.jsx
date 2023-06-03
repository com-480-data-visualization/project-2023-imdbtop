import React from 'react';
import WordCloud from 'react-d3-cloud';

const data = [
  { text: 'Drama', value: 177 },
  { text: 'Adventure', value: 60 },
  { text: 'Crime', value: 51 },
  { text: 'Action', value: 50 },
  { text: 'Comedy', value: 45 },
  { text: 'Mystery', value: 31 },
  { text: 'Thriller', value: 30 },
  { text: 'Biography', value: 29 },
  { text: 'Animation', value: 23 },
  { text: 'War', value: 23 },
  { text: 'Romance', value: 23 },
  { text: 'Sci-Fi', value: 20 },
  { text: 'Fantasy', value: 14 },
  { text: 'Family', value: 13 },
  { text: 'History', value: 10 },
  { text: 'Western', value: 7 },
  { text: 'Sport', value: 5 },
  { text: 'Horror', value: 5 },
  { text: 'Music', value: 4 },
  { text: 'Film-Noir', value: 4 },
  { text: 'Musical', value: 1 },
];

const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

const WordCloudGenre = () => {
  return (
    <WordCloud 
      data={data} 
      fontSizeMapper={fontSizeMapper} 
      rotate={rotate}
      onWordClick={(word) => alert(`You clicked on: ${word.text}`)}
    />
  );
};

export default WordCloudGenre;
