import { sortByBits } from './sort-by-bits';

describe('sortByBits', () => {
  it('sortByBits([3, 8, 3, 6, 5, 7, 9, 1]) should return [1, 8, 3, 3, 5, 6, 9, 7]', () => {
    const array = [3, 8, 3, 6, 5, 7, 9, 1];

    sortByBits(array);

    expect(array).toEqual([1, 8, 3, 3, 5, 6, 9, 7]);
  });

  it('sortByBits([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]) should return [0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]', () => {
    const array = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0];

    sortByBits(array);

    expect(array).toEqual([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
  });
});
