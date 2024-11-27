import { nextInLine } from './next-in-line';

describe('nextInLine', () => {
  it('nextInLine([], 1) should return 1', () => {
    expect(nextInLine([], 1)).toBe(1);
  });

  it('nextInLine([2], 1) should return 2', () => {
    expect(nextInLine([2], 1)).toBe(2);
  });

  it('nextInLine([5, 6, 7, 8, 9], 1) should return 5', () => {
    expect(nextInLine([5, 6, 7, 8, 9], 1)).toBe(5);
  });

  it('after nextInLine(testArr, 10), testArr[4] should return 10', () => {
    const testArr = [1, 2, 3, 4, 5];

    nextInLine(testArr, 10);

    expect(testArr[4]).toBe(10);
  });
});
