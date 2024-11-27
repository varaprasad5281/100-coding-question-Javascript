import { symmetricDifference } from './symmetric-difference';

describe('symmetricDifference', () => {
  it('symmetricDifference([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5]', () => {
    expect(JSON.stringify(symmetricDifference([1, 2, 3], [5, 2, 1, 4]))).toBe(JSON.stringify([3, 4, 5]));
  });

  it('symmetricDifference([1, 2, 3], [5, 2, 1, 4]) should contain only three elements', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toHaveLength(3);
  });

  it('symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5]', () => {
    expect(JSON.stringify(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]))).toBe(JSON.stringify([1, 4, 5]));
  });

  it('symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5]', () => {
    expect(JSON.stringify(symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))).toBe(
      JSON.stringify([1, 4, 5])
    );
  });

  it('symmetricDifference([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements', () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toHaveLength(3);
  });

  it('symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7]', () => {
    expect(JSON.stringify(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))).toBe(
      JSON.stringify([2, 3, 4, 6, 7])
    );
  });

  it('symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements', () => {
    expect(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3])).toHaveLength(5);
  });

  it('symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9]', () => {
    expect(
      JSON.stringify(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))
    ).toBe(JSON.stringify([1, 2, 4, 5, 6, 7, 8, 9]));
  });

  it('symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements', () => {
    expect(symmetricDifference([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1])).toHaveLength(
      8
    );
  });
});
