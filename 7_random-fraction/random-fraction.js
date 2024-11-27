export const randomFraction = () => {
  
  let randomDecimal;
  do {
    randomDecimal = Math.random();
  } while (randomDecimal === 0);

  return randomDecimal;
};
