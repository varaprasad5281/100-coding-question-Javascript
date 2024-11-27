import { greatestCommonDivisor } from './greatest-common-divisor';

describe('greatest-common-divisor', () => {
  it('greatestCommonDivisor(36, 45) should return 9', () => {
    expect(greatestCommonDivisor(36, 45)).toBe(9);
  });

  it('greatestCommonDivisor(22500, 1125) should return 1125', () => {
    expect(greatestCommonDivisor(22500, 1125)).toBe(1125);
  });

  it('greatestCommonDivisor(27, 21) should return 3', () => {
    expect(greatestCommonDivisor(27, 21)).toBe(3);
  });
});
