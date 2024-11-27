import { calculatePrimorialOfANumber } from './calculate-primorial-of-a-number';

describe('calculatePrimorialOfANumber', () => {
  it('calculatePrimorialOfANumber(6) should return 30030', () => {
    expect(calculatePrimorialOfANumber(6)).toBe(30030);
  });

  it('calculatePrimorialOfANumber(5) should return 2310', () => {
    expect(calculatePrimorialOfANumber(5)).toBe(2310);
  });

  it('calculatePrimorialOfANumber(3) should return 30', () => {
    expect(calculatePrimorialOfANumber(3)).toBe(30);
  });

  it('calculatePrimorialOfANumber(4) should return 210', () => {
    expect(calculatePrimorialOfANumber(4)).toBe(210);
  });

  it('calculatePrimorialOfANumber(8) should return 9699690', () => {
    expect(calculatePrimorialOfANumber(8)).toBe(9699690);
  });

  it('calculatePrimorialOfANumber(9) should return 223092870', () => {
    expect(calculatePrimorialOfANumber(9)).toBe(223092870);
  });
});
