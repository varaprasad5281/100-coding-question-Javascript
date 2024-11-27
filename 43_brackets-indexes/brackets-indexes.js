export const bracketsIndexes = (inputStr, openIndex) => {
  let arr = [];
  for (let i = 0; i < inputStr.length; i++) {
    if (inputStr[i] == '(') {
      arr.push(i);
    } else if (inputStr[i] == ')') {
      if (arr.length === 0) {
        return -1;
      }
      let lastOpenIndex = arr.pop();
      if (lastOpenIndex === openIndex) {
        return i;
      }
    }
  }
  return -1;
};
