export const catAndDogYears = (humanYears) => {
  let catYears, dogYears;
  if (humanYears === 1) {
    catYears = dogYears = 15;
  } else if (humanYears === 2) {
    catYears = dogYears = 24;
  } else {
    catYears = 24 + (humanYears - 2) * 4;
    dogYears = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catYears, dogYears];
};
