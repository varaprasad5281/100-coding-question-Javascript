import { repeatString } from './repeat-string';

describe('repeatString', () => {
  it('repeatString("*", 3) should return "***"', () => {
    expect(repeatString('*', 3)).toBe('***');
  });

  it('repeatString("abc", 3) should return "abcabcabc"', () => {
    expect(repeatString('abc', 3)).toBe('abcabcabc');
  });

  it('repeatString("abc", 4) should return "abcabcabcabc"', () => {
    expect(repeatString('abc', 4)).toBe('abcabcabcabc');
  });

  it('repeatString("abc", 1) should return "abc".', () => {
    expect(repeatString('abc', 1)).toBe('abc');
  });

  it('repeatString("*", 8) should return "********"', () => {
    expect(repeatString('*', 8)).toBe('********');
  });

  it('repeatString("abc", -2) should return ""', () => {
    expect(repeatString('abc', -2)).toBe('');
  });
});
