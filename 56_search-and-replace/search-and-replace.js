export const searchAndReplace = (sentence, pattern, replacement) => {
  return sentence
    .split(' ')
    .map((word) => {
      if (word.toLowerCase() === pattern.toLowerCase()) {
        if (/[A-Z]/.test(word[0])) {
          return replacement[0].toUpperCase() + replacement.slice(1);
        } else {
          return replacement.toLowerCase();
        }
      } else {
        return word;
      }
    })
    .join(' ');
};
