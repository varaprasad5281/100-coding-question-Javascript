export const diffArray = (arr1, arr2) => {
  const uniqueInArr1 = arr1.filter((ele) => {
    if (arr2.indexOf(ele) === -1) return ele;
  });
  const uniqueInArr2 = arr2.filter((ele) => {
    if (arr1.indexOf(ele) === -1) return ele;
  });
  return [...uniqueInArr1, ...uniqueInArr2];
};
