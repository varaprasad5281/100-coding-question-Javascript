export const runningAverage = () => {
  let sum = 0;
  let count = 0;
  return (value) => {
    sum += value;
    count++;
    return sum / count;
  };
};
