import { removeFalsyValues } from './remove-falsy-values';

describe('removeFalsyValues', () => {
  it('removeFalsyValues([7, "ate", "", false, 9]) should return [7, "ate", 9]', () => {
    expect(removeFalsyValues([7, 'ate', '', false, 9])).toEqual([7, 'ate', 9]);
  });

  it('removeFalsyValues(["a", "b", "c"]) should return ["a", "b", "c"]', () => {
    expect(removeFalsyValues(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('removeFalsyValues([false, null, 0, NaN, undefined, ""]) should return []', () => {
    expect(removeFalsyValues([false, null, 0, NaN, undefined, ''])).toEqual([]);
  });

  it('removeFalsyValues([1, null, NaN, 2, undefined]) should return [1, 2]', () => {
    expect(removeFalsyValues([1, null, NaN, 2, undefined])).toEqual([1, 2]);
  });
});
