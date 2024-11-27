const compareByBits = (a, b) => {
  const countBits = (num) => {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  };

  const bitCountA = countBits(a);
  const bitCountB = countBits(b);

  if (bitCountA < bitCountB) {
    return -1;
  } else if (bitCountA > bitCountB) {
    return 1;
  } else {
    return a - b;
  }
};

export const sortByBits = (inputArr) => {
  inputArr.sort(compareByBits);
};
