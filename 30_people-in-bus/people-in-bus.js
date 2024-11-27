export const peopleInBus = (inputArray) => {
  return inputArray.reduce((countPeople, array) => {
    countPeople += array[0] - array[1];
    return countPeople;
  }, 0);
};
