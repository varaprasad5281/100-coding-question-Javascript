import { binarySearch } from './sample';

describe('binarySearch', () => {
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  });

  it('should execute basic search', () => {
    const result = binarySearch(arr, 2);

    expect(result).toBe(1);
  });

  it('should execute search when searched item is last', () => {
    const result = binarySearch(arr, 9);

    expect(result).toBe(8);
  });

  it('should execute search when searched item is first', () => {
    const result = binarySearch(arr, 1);

    expect(result).toBe(0);
  });
});
