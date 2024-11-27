export const maxProduct = (inputArr) => {
  let maxProd = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < inputArr.length; i++) {
    maxProd = Math.max(inputArr[i] * inputArr[i - 1], maxProd);
  }
  return maxProd;
};
