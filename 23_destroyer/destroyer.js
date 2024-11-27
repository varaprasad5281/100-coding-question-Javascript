export const destroyer = (arr, ...argsToRemove) => {
  return arr.filter((element) => {
    return argsToRemove.indexOf(element) === -1;
  });
};
