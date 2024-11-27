export const abbreviatedName = (inputName) => {
  return inputName
    .split(' ')
    .map((name, index) => {
      if (index === 0) {
        return name;
      } else {
        return name[0] + '.';
      }
    })
    .join(' ');
};
