const flat = (arr, flattenedArray) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat(arr[i], flattenedArray);
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};
export const unpackElements = (arr) => {
  let flattenedArray = [];
  return flat(arr, flattenedArray);
};
