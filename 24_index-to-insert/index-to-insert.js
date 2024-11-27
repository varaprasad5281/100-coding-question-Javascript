export const indexToInsert = (arr, num) => {
  arr.sort((a, b) => a - b);

  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      index++;
    } else {
      break;
    }
  }
  return index;
};
