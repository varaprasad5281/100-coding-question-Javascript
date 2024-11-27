export const validateUSTelephoneNumber = (str) => {
  const oneAndSpace = '(1\\s?)?';
  const areaCode = '(\\(\\d{3}\\)|\\d{3})';
  const spaceOrHyphen1 = '([\\s\\-]?)';
  const threeDigits = '\\d{3}';
  const spaceOrHyphen2 = '([\\s\\-]?)';
  const fourDigits = '\\d{4}';

  const pattern = new RegExp(
    `^${oneAndSpace}${areaCode}${spaceOrHyphen1}${threeDigits}${spaceOrHyphen2}${fourDigits}$`
  );

  return pattern.test(str);
};
