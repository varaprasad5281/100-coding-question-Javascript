export const uniqueInOrder = (sequence) => {
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }
  if (sequence.length === 0 || sequence.length === 1) return sequence;
  return sequence.filter((value, index, array) => {
    return index === 0 || value !== array[index - 1];
  });
};
