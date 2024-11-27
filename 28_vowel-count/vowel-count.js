export const vowelCount = (inputString) => {
  const vowelRegex = /[aeiou]/gi;
  const vowelMatches = inputString.match(vowelRegex);
  if (!vowelMatches) return 0;
  return vowelMatches.length;
};
