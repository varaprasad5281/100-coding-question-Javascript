import { equalSides } from './equal-sides';

describe('equalSides', () => {
  it('equalSides([1, 2, 3, 4, 3, 2, 1]) should return 3', () => {
    expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toBe(3);
  });

  it('equalSides([1, 100, 50, -51, 1, 1]) should return 1', () => {
    expect(equalSides([1, 100, 50, -51, 1, 1])).toBe(1);
  });

  it('equalSides([1,2,3,4,5,6]) should return -1', () => {
    expect(equalSides([1, 2, 3, 4, 5, 6])).toBe(-1);
  });

  it('equalSides([20, 10, 30, 10, 10, 15, 35]) should return 3', () => {
    expect(equalSides([20, 10, 30, 10, 10, 15, 35])).toBe(3);
  });
});
