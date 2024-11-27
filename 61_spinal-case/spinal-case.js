export const spinalCase = (str) =>
  str
    .replace(/[\s_]/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
