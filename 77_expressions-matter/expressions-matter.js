export const expressionsMatter = (a, b, c) => {
  const expressions = [a + b + c, a + b * c, a * b + c, a * b * c, a + (b + c), a * (b + c), (a + b) * c, a * b * c];
  return Math.max(...expressions);
};

