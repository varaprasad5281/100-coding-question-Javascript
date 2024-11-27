export const averageMark = (inputArr) => {
  let n = inputArr.length;
  let totalSum = inputArr.reduce((sum, value) => {
    sum += value;
    return sum;
  });

  return Math.floor(totalSum / n);
};
