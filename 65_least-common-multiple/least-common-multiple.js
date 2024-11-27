export const leastCommonMultiple = (num1, num2) => {
  let lar = Math.max(num1, num2);
  let small = Math.min(num1, num2);

  let i = lar;
  while (i % small !== 0) {
    i += lar;
  }
  return i;
};
