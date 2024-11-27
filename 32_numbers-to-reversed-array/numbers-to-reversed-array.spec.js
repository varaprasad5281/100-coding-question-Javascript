import { numbersToReversedArray } from './numbers-to-reversed-array';

describe('numbersToReversedArray', () => {
  it('numbersToReversedArray(348597) should return [7, 9, 5, 8, 4, 3]', () => {
    expect(numbersToReversedArray(348597)).toEqual([7, 9, 5, 8, 4, 3]);
  });

  it('numbersToReversedArray(20182005) should return [5, 0, 0, 2, 8, 1, 0, 2]', () => {
    expect(numbersToReversedArray(20182005)).toEqual([5, 0, 0, 2, 8, 1, 0, 2]);
  });
});
