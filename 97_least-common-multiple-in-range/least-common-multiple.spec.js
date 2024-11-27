import { leastCommonMultipleInRage } from './least-common-multiple-in-range';

describe('leastCommonMultipleInRage', () => {
  it('leastCommonMultipleInRage([1, 5]) should return a number', () => {
    expect(typeof leastCommonMultipleInRage([1, 5])).toBe('number');
  });

  it('leastCommonMultipleInRage([1, 5]) should return 60', () => {
    expect(leastCommonMultipleInRage([1, 5])).toBe(60);
  });

  it('leastCommonMultipleInRage([5, 1]) should return 60', () => {
    expect(leastCommonMultipleInRage([5, 1])).toBe(60);
  });

  it('leastCommonMultipleInRage([1, 13]) should return 360360', () => {
    expect(leastCommonMultipleInRage([1, 13])).toBe(360360);
  });

  it('leastCommonMultipleInRage([23, 18]) should return 6056820', () => {
    expect(leastCommonMultipleInRage([23, 18])).toBe(6056820);
  });
});
