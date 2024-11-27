const symmetricDiff = (arr1, arr2) => {
  const diff1 = arr1.filter((item) => !arr2.includes(item));
  const diff2 = arr2.filter((item) => !arr1.includes(item));
  return [...diff1, ...diff2];
};

export const symmetricDifference = (...arrays) => {
  const result = arrays.reduce((accumulator, currentArray) => symmetricDiff(accumulator, currentArray), []);

  return [...new Set(result)].sort((a, b) => a - b);
};
