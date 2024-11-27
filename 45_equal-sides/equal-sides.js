export const equalSides = (inputArray) => {
  const n = inputArray.length;
  const totalSum = inputArray.reduce((sum, num) => sum + num, 0);
  
  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    const rightSum = totalSum - leftSum - inputArray[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += inputArray[i];
  }
  return -1;
};
