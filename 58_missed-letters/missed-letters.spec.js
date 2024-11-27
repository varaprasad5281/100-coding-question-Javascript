import { missedLetters } from './missed-letters';

describe('missedLetters', () => {
  it('missedLetters("abce") should return "d".', () => {
    expect(missedLetters('abce')).toBe('d');
  });

  it('missedLetters("abcdefghjklmno") should return "i".', () => {
    expect(missedLetters('abcdefghjklmno')).toBe('i');
  });

  it('missedLetters("bcd") should return undefined.', () => {
    expect(missedLetters('bcd')).toBeUndefined();
  });

  it('missedLetters("yz") should return undefined.', () => {
    expect(missedLetters('yz')).toBeUndefined();
  });
});
