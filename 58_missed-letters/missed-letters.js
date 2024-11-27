export const missedLetters = (str) => {

  for (let i = 0; i < str.length - 1; i++) {
    const currLetterCode = str.charCodeAt(i);
    const nextLetterCode = str.charCodeAt(i + 1);
    
    if (nextLetterCode !== currLetterCode + 1) {
      return String.fromCharCode(currLetterCode + 1);
    }
  }
  return undefined;
};
