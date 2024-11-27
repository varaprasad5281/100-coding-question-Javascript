import { findElements } from './find-elements';

describe('findElements', () => {
  it('findElements([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8', () => {
    expect(findElements([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0)).toBe(8);
  });

  it('findElements([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined', () => {
    expect(findElements([1, 3, 5, 9], (num) => num % 2 === 0)).toBeUndefined();
  });
});
