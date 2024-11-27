export const buyingCar = (oldCarPrice, newCarPrice, monthlySaving, percentLoss) => {
  let months = 0;
  let savings = 0;

  while (savings + oldCarPrice < newCarPrice) {
    months++;
    if (months % 2 === 0) {
      percentLoss += 0.5;
    }
    oldCarPrice = oldCarPrice * (1 - percentLoss / 100);
    newCarPrice = newCarPrice * (1 - percentLoss / 100);
    savings += monthlySaving;
  }

  return [months, Math.round(savings + oldCarPrice - newCarPrice)];
};
