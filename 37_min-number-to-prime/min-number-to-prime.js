const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

export const minNumberToPrime = (inputArr) => {
  const arrSum = inputArr.reduce((sum, val) => sum + val, 0);
  let numberToAdd = 0;

  while (!isPrime(arrSum + numberToAdd)) {
    numberToAdd++;
  }

  return numberToAdd;
};
