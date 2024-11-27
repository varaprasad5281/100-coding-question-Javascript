/**
 * binarySearch - Performs a binary search on the array.
 *
 * @param {Array<Number>} array
 * @param {Number} value
 * @return {*}
 */
export function binarySearch(array, value) {
  let guess;
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (array[guess] === value) {
      return guess;
    }

    if (array[guess] < value) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
}
