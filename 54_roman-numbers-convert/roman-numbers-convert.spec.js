import { romanNumbersConvert } from './roman-numbers-convert';

describe('romanNumbersConvert', () => {
  it('romanNumbersConvert(2) should return "II"', () => {
    expect(romanNumbersConvert(2)).toBe('II');
  });

  it('romanNumbersConvert(3) should return "III"', () => {
    expect(romanNumbersConvert(3)).toBe('III');
  });

  it('romanNumbersConvert(4) should return "IV"', () => {
    expect(romanNumbersConvert(4)).toBe('IV');
  });

  it('romanNumbersConvert(5) should return "V"', () => {
    expect(romanNumbersConvert(5)).toBe('V');
  });

  it('romanNumbersConvert(9) should return "IX"', () => {
    expect(romanNumbersConvert(9)).toBe('IX');
  });

  it('romanNumbersConvert(12) should return "XII"', () => {
    expect(romanNumbersConvert(12)).toBe('XII');
  });

  it('romanNumbersConvert(29) should return "XXIX"', () => {
    expect(romanNumbersConvert(29)).toBe('XXIX');
  });

  it('romanNumbersConvert(44) should return "XLIV"', () => {
    expect(romanNumbersConvert(44)).toBe('XLIV');
  });

  it('romanNumbersConvert(45) should return "XLV"', () => {
    expect(romanNumbersConvert(45)).toBe('XLV');
  });

  it('romanNumbersConvert(68) should return "LXVIII"', () => {
    expect(romanNumbersConvert(68)).toBe('LXVIII');
  });

  it('romanNumbersConvert(83) should return "LXXXIII"', () => {
    expect(romanNumbersConvert(83)).toBe('LXXXIII');
  });

  it('romanNumbersConvert(97) should return "XCVII"', () => {
    expect(romanNumbersConvert(97)).toBe('XCVII');
  });

  it('romanNumbersConvert(500) should return "D"', () => {
    expect(romanNumbersConvert(500)).toBe('D');
  });

  it('romanNumbersConvert(501) should return "DI"', () => {
    expect(romanNumbersConvert(501)).toBe('DI');
  });

  it('romanNumbersConvert(649) should return "DCXLIX"', () => {
    expect(romanNumbersConvert(649)).toBe('DCXLIX');
  });

  it('romanNumbersConvert(798) should return "DCCXCVIII"', () => {
    expect(romanNumbersConvert(798)).toBe('DCCXCVIII');
  });

  it('romanNumbersConvert(891) should return "DCCCXCI"', () => {
    expect(romanNumbersConvert(891)).toBe('DCCCXCI');
  });
});
