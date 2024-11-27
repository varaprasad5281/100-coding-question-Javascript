export const maxTripletSum = (arr) => {
  const uniqueArray = [...new Set(arr)];
  uniqueArray.sort((a, b) => b - a);
  return uniqueArray.slice(0, 3).reduce((sum, value) => sum + value, 0);
};
