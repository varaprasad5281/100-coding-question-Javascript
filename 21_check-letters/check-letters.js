export function checkLetters(arr) {
  const [first, second] = arr.map((word) => word.toLowerCase());
  return [...second].every((char) => first.includes(char));
}
