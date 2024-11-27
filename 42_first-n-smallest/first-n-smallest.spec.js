import { firstNSmallest } from './first-n-smallest';

describe('firstNSmallest', () => {
  it('firstNSmallest([1, 2, 3, 4, 5], 3) should return [1, 2, 3]', () => {
    expect(firstNSmallest([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  });

  it('firstNSmallest([5, 4, 3, 2, 1], 3) should return [3, 2, 1]', () => {
    expect(firstNSmallest([5, 4, 3, 2, 1], 3)).toEqual([3, 2, 1]);
  });

  it('firstNSmallest([1, 2, 3, 1, 2], 3) should return [1, 2, 1]', () => {
    expect(firstNSmallest([1, 2, 3, 1, 2], 3)).toEqual([1, 2, 1]);
  });

  it('firstNSmallest([1, 2, 3, -4, 0], 3) should return [1, -4, 0]', () => {
    expect(firstNSmallest([1, 2, 3, -4, 0], 3)).toEqual([1, -4, 0]);
  });

  it('firstNSmallest([1, 2, 3, 4, 5], 0) should return []', () => {
    expect(firstNSmallest([1, 2, 3, 4, 5], 0)).toEqual([]);
  });

  it('firstNSmallest([1, 2, 3, 4, 5], 5) should return [1, 2, 3, 4, 5]', () => {
    expect(firstNSmallest([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it('firstNSmallest([1, 2, 3, 4, 2], 4) should return [1, 2, 3, 2]', () => {
    expect(firstNSmallest([1, 2, 3, 4, 2], 4)).toEqual([1, 2, 3, 2]);
  });

  it('firstNSmallest([2, 1, 2, 3, 4, 2], 2) should return [2, 1]', () => {
    expect(firstNSmallest([2, 1, 2, 3, 4, 2], 2)).toEqual([2, 1]);
  });

  it('firstNSmallest([2, 1, 2, 3, 4, 2], 3) should return [2, 1, 2]', () => {
    expect(firstNSmallest([2, 1, 2, 3, 4, 2], 3)).toEqual([2, 1, 2]);
  });

  it('firstNSmallest([2, 1, 2, 3, 4, 2], 4) should return [2, 1, 2, 2]', () => {
    expect(firstNSmallest([2, 1, 2, 3, 4, 2], 4)).toEqual([2, 1, 2, 2]);
  });
});
