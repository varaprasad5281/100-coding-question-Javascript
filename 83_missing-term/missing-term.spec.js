import { missingTerm } from './missing-term';

describe('missingTerm', () => {
  it('missingTerm([1, 3, 5, 9, 11]) should return 7', () => {
    expect(missingTerm([1, 3, 5, 9, 11])).toBe(7);
  });

  it('missingTerm([1, 3, 4]) should return 2', () => {
    expect(missingTerm([1, 3, 4])).toBe(2);
  });

  it('missingTerm([0, 3, 6, 12 ]) should return 9', () => {
    expect(missingTerm([0, 3, 6, 12])).toBe(9);
  });

  it('missingTerm([ 8, 13, 18, 23, 28, 33, 38, 43, 53, 58 ]) should return 48', () => {
    expect(missingTerm([8, 13, 18, 23, 28, 33, 38, 43, 53, 58])).toBe(48);
  });

  it('missingTerm([ -2, -3, -5, -6, -7, -8, -9 ]) should return -4', () => {
    expect(missingTerm([-2, -3, -5, -6, -7, -8, -9])).toBe(-4);
  });

  it('missingTerm([ 2, -1, -7 ]) should return -4', () => {
    expect(missingTerm([2, -1, -7])).toBe(-4);
  });

  it('missingTerm([ -1, -3, -5, -7, -9, -11, -15, -17, -19 ]) should return -13', () => {
    expect(missingTerm([-1, -3, -5, -7, -9, -11, -15, -17, -19])).toBe(-13);
  });
});
