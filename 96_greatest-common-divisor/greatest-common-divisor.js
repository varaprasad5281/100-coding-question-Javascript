export const greatestCommonDivisor = (a, b) => {
  if (b === 0) return a;
  return greatestCommonDivisor(b, a % b);
};
