import { checkForPalindromes } from './check-for-palindromes';

describe('checkForPalindromes', () => {
  it('checkForPalindromes("eye") should return a boolean', () => {
    expect(typeof checkForPalindromes('eye')).toBe('boolean');
  });

  it('checkForPalindromes("eye") should return true', () => {
    expect(checkForPalindromes('eye')).toBe(true);
  });

  it('checkForPalindromes("race car") should return true', () => {
    expect(checkForPalindromes('race car')).toBe(true);
  });

  it('checkForPalindromes("not a palindrome") should return false', () => {
    expect(checkForPalindromes('not a palindrome')).toBe(false);
  });

  it('checkForPalindromes("A man, a plan, a canal. Panama") should return true', () => {
    expect(checkForPalindromes('A man, a plan, a canal. Panama')).toBe(true);
  });

  it('checkForPalindromes("never odd or even") should return true', () => {
    expect(checkForPalindromes('never odd or even')).toBe(true);
  });

  it('checkForPalindromes("nope") should return false', () => {
    expect(checkForPalindromes('nope')).toBe(false);
  });

  it('checkForPalindromes("almostomla") should return false.', () => {
    expect(checkForPalindromes('almostomla')).toBe(false);
  });

  it('checkForPalindromes("My age is 0, 0 si ega ym.") should return true', () => {
    expect(checkForPalindromes('My age is 0, 0 si ega ym.')).toBe(true);
  });

  it('checkForPalindromes("1 eye for of 1 eye.") should return false', () => {
    expect(checkForPalindromes('1 eye for of 1 eye.')).toBe(false);
  });

  it('checkForPalindromes("0_0 (: /- :) 0-0") should return true', () => {
    expect(checkForPalindromes('0_0 (: /- :) 0-0')).toBe(true);
  });

  it('checkForPalindromes("five|_/|four") should return false', () => {
    expect(checkForPalindromes('five|_/|four')).toBe(false);
  });
});
