import { stringExpansion } from './string-expansion';

describe('stringExpansion', () => {
  it('stringExpansion("3D2a5d2f") should return "DDDaadddddff"', () => {
    expect(stringExpansion('3D2a5d2f')).toBe('DDDaadddddff');
  });

  it('stringExpansion("3abc") should return "aaabbbccc"', () => {
    expect(stringExpansion('3abc')).toBe('aaabbbccc');
  });

  it('stringExpansion("3d332f2a") should return "dddffaa"', () => {
    expect(stringExpansion('3d332f2a')).toBe('dddffaa');
  });

  it('stringExpansion("abcde") should return "abcde"', () => {
    expect(stringExpansion('abcde')).toBe('abcde');
  });

  it('stringExpansion("") should return ""', () => {
    expect(stringExpansion('')).toBe('');
  });

  it('stringExpansion("3d332f2xyZ") should return "dddffxxyyZZ"', () => {
    expect(stringExpansion('3d332f2xyZ')).toBe('dddffxxyyZZ');
  });
});
