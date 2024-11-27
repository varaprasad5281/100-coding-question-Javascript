export const swapCases = (str) => {
  return str
    .split('')
    .map((char) => {
      if (char === char.toLowerCase()) {
        return char.toUpperCase();
      } else if (char === char.toUpperCase()) {
        return char.toLowerCase();
      }
      return char;
    })
    .join('');
};
