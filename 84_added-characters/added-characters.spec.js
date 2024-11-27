import { addedCharacters } from './added-characters';

describe('addedCharacters', () => {
  it('addedCharacters("aabbcc", "aacccbbcc") should return "c"', () => {
    expect(addedCharacters('aabbcc', 'aacccbbcc')).toBe('c');
  });

  it('addedCharacters("abcde", "2db2a2ec") should return "2"', () => {
    expect(addedCharacters('abcde', '2db2a2ec')).toBe('2');
  });

  it('addedCharacters("hello", "aaahello") should return "a"', () => {
    expect(addedCharacters('hello', 'aaahello')).toBe('a');
  });
});
