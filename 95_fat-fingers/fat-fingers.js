export const fatFingers = (str) => {
  let capsLock = false;
  let result = '';

  for (const char of str) {
    if (char.toLowerCase() === 'a') {
      capsLock = !capsLock;
    } else if (capsLock) {
      result += char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result;
};
