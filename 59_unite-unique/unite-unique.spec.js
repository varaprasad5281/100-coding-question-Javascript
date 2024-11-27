import { uniteUnique } from './unite-unique';

describe('uniteUnique', () => {
  it('uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4]', () => {
    expect(JSON.stringify(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))).toBe('[1,3,2,5,4]');
  });

  it('uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]]', () => {
    expect(JSON.stringify(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]))).toBe('[1,3,2,[5],[4]]');
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5]', () => {
    expect(JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1]))).toBe('[1,2,3,5]');
  });

  it('uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]', () => {
    expect(JSON.stringify(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]))).toBe('[1,2,3,5,4,6,7,8]');
  });
});
