export const removeFalsyValues = (arr) => {
  return arr.filter((ele) => {
    if (Boolean(ele)) return ele;
  });
};
