export const binaryDecode = (binaryString) => {
  const binaryArray = binaryString.split(' ');
  const charArr = [];

  for (let binaryNumber of binaryArray) {
    const decimalValue = parseInt(binaryNumber, 2);
    const char = String.fromCharCode(decimalValue);
    charArr.push(char);
  }
  return charArr.join('');
};
