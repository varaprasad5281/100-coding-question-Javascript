export const truncateArray = (arr, n) => {
  if (arr.length <= n) return [];
  return arr.splice(n, arr.length - n);
};
