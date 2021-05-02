const selectRandomInArray = (array) => {
  const randomNumberIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomNumberIndex];
  return randomElement;
};

export default selectRandomInArray;
