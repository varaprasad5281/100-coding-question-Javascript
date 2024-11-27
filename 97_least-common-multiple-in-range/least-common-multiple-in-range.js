const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};
const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};
export const leastCommonMultipleInRage = (range) => {
  range.sort((a, b) => a - b);

  let result = range[0];
  for (let i = range[0] + 1; i <= range[1]; i++) {
    result = lcm(result, i);
  }

  return result;
};
