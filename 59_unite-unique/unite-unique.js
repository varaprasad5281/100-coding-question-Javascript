export const uniteUnique = (...arrays) => {
  return arrays.reduce((result, currentArray) => {
    for (let value of currentArray) {
      if (!result.includes(value)) {
        result.push(value);
      }
    }
    return result;
  });
};
