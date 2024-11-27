import { vowelCount } from './vowel-count';

describe('vowelCount', () => {
  it('vowelCount("abracadabra") should return 5', () => {
    expect(vowelCount('abracadabra')).toBe(5);
  });

  it('vowelCount("pear tree") should return 4', () => {
    expect(vowelCount('pear tree')).toBe(4);
  });

  it('vowelCount("o a kak ushakov lil v kashu kakao") should return 12', () => {
    expect(vowelCount('o a kak ushakov lil v kashu kakao?')).toBe(12);
  });

  it('vowelCount("my pyx") should return 0', () => {
    expect(vowelCount("my pyx'")).toBe(0);
  });
});
