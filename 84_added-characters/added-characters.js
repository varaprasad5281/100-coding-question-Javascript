export const addedCharacters = (str1, str2) => {
  let str1Array = str1.split('');
  let str2Array = str2.split('');

  str1Array.sort();
  str2Array.sort();

  for (let i = 0; i < str1Array.length; i++) {
    if (str1Array[i] !== str2Array[i]) {
      return str2Array[i];
    }
  }

  return str2Array[str2Array.length - 1];
};
