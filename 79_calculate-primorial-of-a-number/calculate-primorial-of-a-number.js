const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const calculatePrimorialOfANumber = (n) => {
  let count = 0;
  let i = 2;
  let primorial = 1;
  while (count < n) {
    if (isPrime(i)) {
      count++;
      primorial = primorial * i;
    }
    i++;
  }
  return primorial;
};
