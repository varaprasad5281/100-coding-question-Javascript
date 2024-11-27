import { reverseStringInRange } from './reverse-string-in-range';

describe('reverseStringInRange', () => {
  it('reverseStringInRange("codewars", [1, 5]) should return "cawedors"', () => {
    expect(reverseStringInRange('codewars', [1, 5])).toBe('cawedors');
  });

  it('reverseStringInRange("codingIsFun", [2, 100]) should return "conuFsIgnid"', () => {
    expect(reverseStringInRange('codingIsFun', [2, 100])).toBe('conuFsIgnid');
  });

  it('reverseStringInRange("FunctionalProgramming", [2, 15]) should return "FuargorPlanoitcnmming"', () => {
    expect(reverseStringInRange('FunctionalProgramming', [2, 15])).toBe('FuargorPlanoitcnmming');
  });

  it('reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [0, 20]) should return "utsrqponmlkjihgfedcbavwxyz"', () => {
    expect(reverseStringInRange('abcdefghijklmnopqrstuvwxyz', [0, 20])).toBe('utsrqponmlkjihgfedcbavwxyz');
  });

  it('reverseStringInRange("abcdefghijklmnopqrstuvwxyz", [5, 20]) should return "abcdeutsrqponmlkjihgfvwxyz"', () => {
    expect(reverseStringInRange('abcdefghijklmnopqrstuvwxyz', [5, 20])).toBe('abcdeutsrqponmlkjihgfvwxyz');
  });

  it('reverseStringInRange("hippopotamus", [3, 4]) should return "hipoppotamus"', () => {
    expect(reverseStringInRange('hippopotamus', [3, 4])).toBe('hipoppotamus');
  });

  it('reverseStringInRange("vivisection", [2, 3]) should return "viivsection"', () => {
    expect(reverseStringInRange('vivisection', [2, 3])).toBe('viivsection');
  });
});
