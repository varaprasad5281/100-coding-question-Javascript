export const pairwise = (arr, total) => {
  const indexes = [];
  let sumOfIndexes = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (!indexes.includes(i) && !indexes.includes(j) && arr[i] + arr[j] === total) {
        indexes.push(i, j);
        sumOfIndexes += i + j;
      }
    }
  }

  return sumOfIndexes;
};
