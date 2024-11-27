export const findFriend = (maskArray) => {
  let friendCount = 0;
  let n = maskArray.length;
  for (let i = 0; i < n; i++) {
    if (maskArray[i] === 'red') {
      if (
        (maskArray[i + 1] === 'blue' && maskArray[i + 2] === 'blue') ||
        (maskArray[i - 1] === 'blue' && maskArray[i - 2] === 'blue') ||
        (maskArray[i + 1] === 'blue' && maskArray[i - 1] === 'blue')
      ) {
        friendCount++;
      }
    }
  }
  return friendCount;
};
