export const stringExpansion = (inputStr) => {
  let result = '';
  let count = 1;

  for (const char of inputStr) {
    if (!isNaN(char)) {
      count = parseInt(char);
    } else if (/[a-zA-Z]/.test(char)) {
      result += char.repeat(count);
    } else {
      result += char;
    }
  }

  return result;
};
