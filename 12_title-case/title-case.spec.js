import { titleCase } from './title-case';

describe('titleCase', () => {
  it('titleCase("I\'m a little tea pot") should return a string', () => {
    expect(typeof titleCase("I'm a little tea pot")).toBe('string');
  });

  it('titleCase("I\'m a little tea pot") should return "I\'m A Little Tea Pot"', () => {
    expect(titleCase("I'm a little tea pot")).toBe("I'm A Little Tea Pot");
  });

  it('titleCase("sHoRt AnD sToUt") should return "Short And Stout"', () => {
    expect(titleCase('sHoRt AnD sToUt')).toBe('Short And Stout');
  });

  it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return "Here Is My Handle Here Is My Spout"', () => {
    expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).toBe('Here Is My Handle Here Is My Spout');
  });
});
