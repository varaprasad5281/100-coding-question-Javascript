import { sumAllNumbersInRange } from './sum-all-numbers-in-range';

describe('sumAllNumbersInRange', () => {
  it('sumAllNumbersInRange([1, 4]) should return a number', () => {
    expect(typeof sumAllNumbersInRange([1, 4])).toBe('number');
  });

  it('sumAllNumbersInRange([1, 4]) should return 10', () => {
    expect(sumAllNumbersInRange([1, 4])).toBe(10);
  });

  it('sumAllNumbersInRange([4, 1]) should return 10', () => {
    expect(sumAllNumbersInRange([4, 1])).toBe(10);
  });

  it('sumAllNumbersInRange([5, 10]) should return 45', () => {
    expect(sumAllNumbersInRange([5, 10])).toBe(45);
  });

  it('sumAllNumbersInRange([10, 5]) should return 45', () => {
    expect(sumAllNumbersInRange([10, 5])).toBe(45);
  });
});
