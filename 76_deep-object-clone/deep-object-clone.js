export const deepObjectClone = (original) => {
  if (typeof original !== 'object') return original;

  let copy =  {};
  for (const key in original) {
    const value = original[key];
    copy[key] = deepObjectClone(value);
  }

  return copy;
};
