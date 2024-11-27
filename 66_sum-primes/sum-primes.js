const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const sumPrimes = (number) => {
  let primeNumbers = [];

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers.reduce((sum, ele) => sum + ele);
};
