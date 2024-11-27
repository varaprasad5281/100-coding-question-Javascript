import { truncateArray } from './truncate-array';

describe('truncateArray', () => {
  it('truncateArray([1, 2, 3], 2) should return [3]', () => {
    expect(truncateArray([1, 2, 3], 2)).toEqual([3]);
  });

  it('truncateArray([1, 2, 3], 0) should return [1, 2, 3]', () => {
    expect(truncateArray([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('truncateArray([1, 2, 3], 9) should return []', () => {
    expect(truncateArray([1, 2, 3], 9)).toEqual([]);
  });

  it('truncateArray([1, 2, 3], 4) should return []', () => {
    expect(truncateArray([1, 2, 3], 4)).toEqual([]);
  });

  it('truncateArray(["burgers", "fries", "shake"], 1) should return ["fries", "shake"]', () => {
    expect(truncateArray(['burgers', 'fries', 'shake'], 1)).toEqual(['fries', 'shake']);
  });

  it('truncateArray([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4]', () => {
    expect(truncateArray([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5)).toEqual(['cheese', 4]);
  });
});
