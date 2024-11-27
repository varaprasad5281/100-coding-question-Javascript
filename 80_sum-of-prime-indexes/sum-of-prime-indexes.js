const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const sumOfPrimeIndexes = (arr) => {
  return arr.reduce((sum, value, index) => {
    if (isPrime(index)) {
      sum += value;
    }
    return sum;
  }, 0);
};
