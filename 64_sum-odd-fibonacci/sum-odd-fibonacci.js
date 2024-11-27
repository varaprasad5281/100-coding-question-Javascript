export const sumOddFibonacci=(num) =>{
  let fibArr = [1, 1];

  while (true) {
    let n = fibArr.length;
    const nextFib = fibArr[n - 1] + fibArr[n - 2];
    if (nextFib <= num) {
      fibArr.push(nextFib);
    } else {
      break;
    }
  }
  return fibArr.reduce((sum, current) => {
    if (current % 2 !== 0) {
      sum += current;
    }
    return sum;
  }, 0);
}
