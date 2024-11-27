export const pigLatin = (word) => {
  let consonant = '';
  let i = 0;
  let regex = /[aeiou]/;
  while (!regex.test(word[i])) {
    consonant += word[i];
    i++;
  }
  let remainingWord = word.substr(i);
  if (consonant.length > 0) {
    return remainingWord + consonant + 'ay';
  } else {
    return remainingWord + 'way';
  }
};
