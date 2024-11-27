import { sumOfPrimeIndexes } from './sum-of-prime-indexes';

describe('sumOfPrimeIndexes', () => {
  it('sumOfPrimeIndexes([]) should return 0', () => {
    expect(sumOfPrimeIndexes([])).toBe(0);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4]) should return 7', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4])).toBe(7);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4, 5, 6]) should return 13', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4, 5, 6])).toBe(13);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8]) should return 21', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8])).toBe(21);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) should return 21', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(21);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) should return 33', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])).toBe(33);
  });

  it('sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) should return 47', () => {
    expect(sumOfPrimeIndexes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(47);
  });
});
