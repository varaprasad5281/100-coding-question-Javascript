import { minNumberToPrime } from './min-number-to-prime';

describe('minNumberToPrime', () => {
  it('minNumberToPrime([3, 1, 2]) should return 1', () => {
    expect(minNumberToPrime([3, 1, 2])).toBe(1);
  });

  it('minNumberToPrime([2, 12, 8, 4, 6]) should return 5', () => {
    expect(minNumberToPrime([2, 12, 8, 4, 6])).toBe(5);
  });

  it('minNumberToPrime([50, 39, 49, 6, 17, 28]) should return 2', () => {
    expect(minNumberToPrime([50, 39, 49, 6, 17, 28])).toBe(2);
  });

  it('minNumberToPrime([5, 2]) should return 0', () => {
    expect(minNumberToPrime([5, 2])).toBe(0);
  });
});
