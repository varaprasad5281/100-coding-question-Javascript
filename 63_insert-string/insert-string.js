export const insertString = (originalString, stringToInsert = '', index = 0) => {
  const part1 = originalString.slice(0, index);
  const part2 = originalString.slice(index);
  return part1 + stringToInsert + part2;
};
