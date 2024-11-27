import { findLongestWord } from './find-longest-word';

describe('findLongestWord', () => {
  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return a number', () => {
    expect(typeof findLongestWord('The quick brown fox jumped over the lazy dog')).toBe('number');
  });

  it('findLongestWord("The quick brown fox jumped over the lazy dog") should return 6', () => {
    expect(findLongestWord('The quick brown fox jumped over the lazy dog')).toBe(6);
  });

  it('findLongestWord("May the force be with you") should return 5', () => {
    expect(findLongestWord('May the force be with you')).toBe(5);
  });

  it('findLongestWord("Google do a barrel roll") should return 6', () => {
    expect(findLongestWord('Google do a barrel roll')).toBe(6);
  });

  it('findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8', () => {
    expect(findLongestWord('What is the average airspeed velocity of an unladen swallow')).toBe(8);
  });

  it('findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19', () => {
    expect(findLongestWord('What if we try a super-long word such as otorhinolaryngology')).toBe(19);
  });
});
