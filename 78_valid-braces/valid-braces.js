export const validBraces = (braces) => {
  const arr = [];

  for (let i = 0; i < braces.length; i++) {
    const curr = braces[i];
    if (curr === '(' || curr === '{' || curr === '[') {
      arr.push(curr);
    } else {
      const lastbrace = arr.pop();
      if (
        (curr === ')' && lastbrace !== '(') ||
        (curr === '}' && lastbrace !== '{') ||
        (curr === ']' && lastbrace !== '[')
      ) {
        return false;
      }
    }
  }

  return arr.length === 0;
};
