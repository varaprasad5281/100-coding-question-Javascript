export const humanizeFormat = (number) => {
  
  if (typeof number !== 'number' || isNaN(number)) {
    return '';
  }
  if (number % 100 >= 11 && number % 100 <= 13) {
    return number + 'th';
  }

  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return number + 'st';
    case 2:
      return number + 'nd';
    case 3:
      return number + 'rd';
    default:
      return number + 'th';
  }
};
