export const rot13Encoder = (inputStr) => {
  let result = '';
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];
    if (char.match(/[A-Z]/)) {
      let code = inputStr.charCodeAt(i);
      if (code >= 65 && code <= 77) {
        char = String.fromCharCode(code + 13);
      } else {
        char = String.fromCharCode(code - 13);
      }
    }
    result += char;
  }
  return result;
};
