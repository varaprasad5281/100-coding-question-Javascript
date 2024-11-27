export const titleCase = (str) => {
  let arr = str.split(' ').map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return arr.join(' ');
};
