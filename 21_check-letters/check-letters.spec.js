import { checkLetters } from './check-letters';

describe('checkLetters', () => {
  it('checkLetters(["hello", "hey"]) should return false', () => {
    expect(checkLetters(['hello', 'hey'])).toBe(false);
  });

  it('checkLetters(["hello", "Hello"]) should return true', () => {
    expect(checkLetters(['hello', 'Hello'])).toBe(true);
  });

  it('checkLetters(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', () => {
    expect(checkLetters(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).toBe(true);
  });

  it('checkLetters(["Mary", "Army"]) should return true.', () => {
    expect(checkLetters(['Mary', 'Army'])).toBe(true);
  });

  it('checkLetters(["Mary", "Aarmy"]) should return true', () => {
    expect(checkLetters(['Mary', 'Aarmy'])).toBe(true);
  });

  it('checkLetters(["Alien", "line"]) should return true', () => {
    expect(checkLetters(['Alien', 'line'])).toBe(true);
  });

  it('checkLetters(["floor", "for"]) should return true', () => {
    expect(checkLetters(['floor', 'for'])).toBe(true);
  });

  it('checkLetters(["hello", "neo"]) should return false', () => {
    expect(checkLetters(['hello', 'neo'])).toBe(false);
  });

  it('checkLetters(["voodoo", "no"]) should return false', () => {
    expect(checkLetters(['voodoo', 'no'])).toBe(false);
  });
});
