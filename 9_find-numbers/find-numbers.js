export const findNumbers = (str) => str.match(/\d+/g).map((element) => +element);
