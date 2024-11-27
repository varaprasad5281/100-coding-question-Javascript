export const sumAllNumbersInRange = (range) => {
  const minValue = Math.min(range[0], range[1]);
  const maxValue = Math.max(range[0], range[1]);
  return Array.from({ length: maxValue - minValue + 1 }, (_, index) => {
    return minValue + index;
  }).reduce((sum, element) => sum + element, 0);
};
