import { indexToInsert } from './index-to-insert';

describe('indexToInsert', () => {
  it('indexToInsert([10, 20, 30, 40, 50], 35) should return 3', () => {
    expect(indexToInsert([10, 20, 30, 40, 50], 35)).toBe(3);
  });

  it('indexToInsert([10, 20, 30, 40, 50], 30) should return 2', () => {
    expect(indexToInsert([10, 20, 30, 40, 50], 30)).toBe(2);
  });

  it('indexToInsert([40, 60], 50) should return 1', () => {
    expect(indexToInsert([40, 60], 50)).toBe(1);
  });

  it('indexToInsert([3, 10, 5], 3) should return 0', () => {
    expect(indexToInsert([3, 10, 5], 3)).toBe(0);
  });

  it('indexToInsert([5, 3, 20, 3], 5) should return 2', () => {
    expect(indexToInsert([5, 3, 20, 3], 5)).toBe(2);
  });

  it('indexToInsert([2, 20, 10], 19) should return 2', () => {
    expect(indexToInsert([2, 20, 10], 19)).toBe(2);
  });

  it('indexToInsert([2, 5, 10], 15) should return 3', () => {
    expect(indexToInsert([2, 5, 10], 15)).toBe(3);
  });
});
