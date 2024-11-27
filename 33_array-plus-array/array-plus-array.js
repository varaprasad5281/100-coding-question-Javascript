export const arrayPlusArray = (array1, array2) => {
  let i = 0,
    j = 0;
  let resultArray = [];
  while (i < array1.length || j < array2.length) {
    const value1 = array1[i++] || 0;
    const value2 = array2[j++] || 0;
    resultArray.push(value1 + value2);
  }
  return resultArray;
};
