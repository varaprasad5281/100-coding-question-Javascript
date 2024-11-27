export const arrayLeaders = (inputArray) => {
  const n = inputArray.length;
  const resultArray = [];
  
  let sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (inputArray[i] > sum) {
      resultArray.unshift(inputArray[i]);
    }
    sum += inputArray[i];
  }
  return resultArray;
};
