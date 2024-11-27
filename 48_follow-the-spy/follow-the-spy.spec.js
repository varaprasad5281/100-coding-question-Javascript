import { followTheSpy } from './follow-the-spy';

describe('followTheSpy', () => {
  it('followTheSpy([["USA", "BRA"], ["JPN", "PHL"], ["UAE", "JPN"], ["BRA", "UAE"]]) should return a string', () => {
    expect(
      typeof followTheSpy([
        ['USA', 'BRA'],
        ['JPN', 'PHL'],
        ['UAE', 'JPN'],
        ['BRA', 'UAE'],
      ])
    ).toBe('string');
  });

  it('followTheSpy([["USA", "BRA"], ["JPN", "PHL"], ["UAE", "JPN"], ["BRA", "UAE"]]) should return "USA, BRA, UAE, JPN, PHL"', () => {
    expect(
      followTheSpy([
        ['USA', 'BRA'],
        ['JPN', 'PHL'],
        ['UAE', 'JPN'],
        ['BRA', 'UAE'],
      ])
    ).toBe('USA, BRA, UAE, JPN, PHL');
  });

  it('followTheSpy([["JPN", "PHL"], ["USA", "BRA"], ["UAE", "JPN"], ["BRA", "UAE"]]) should return "USA, BRA, UAE, JPN, PHL"', () => {
    expect(
      followTheSpy([
        ['JPN', 'PHL'],
        ['USA', 'BRA'],
        ['UAE', 'JPN'],
        ['BRA', 'UAE'],
      ])
    ).toBe('USA, BRA, UAE, JPN, PHL');
  });
});
