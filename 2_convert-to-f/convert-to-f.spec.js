import { convertToF } from './convert-to-f';

describe('convertToF', () => {
  it('should return a number', () => {
    expect(typeof convertToF(0)).toBe('number');
  });

  it('convertToF(-30) should return -22', () => {
    expect(convertToF(-30)).toBe(-22);
  });

  it('convertToF(-10) should return 14', () => {
    expect(convertToF(-10)).toBe(14);
  });
});
