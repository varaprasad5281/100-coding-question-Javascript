import { catAndDogYears } from './cat-and-dog-years';

describe('catAndDogYears', () => {
  it('catAndDogYears(1) should return [1, 15, 15]', () => {
    expect(JSON.stringify(catAndDogYears(1))).toBe('[1,15,15]');
  });

  it('catAndDogYears(2) should return [2, 24, 24]', () => {
    expect(JSON.stringify(catAndDogYears(2))).toBe('[2,24,24]');
  });

  it('catAndDogYears(10) should return [10, 56, 64]', () => {
    expect(JSON.stringify(catAndDogYears(10))).toBe('[10,56,64]');
  });
});
