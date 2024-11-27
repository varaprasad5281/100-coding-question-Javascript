export const truncateString = (str, n) => {
  if (str.length <= n) return str;
  const dots = '...';
  return n < 3 ? str.slice(0, n) + dots : str.slice(0, n - 3) + dots;
};
