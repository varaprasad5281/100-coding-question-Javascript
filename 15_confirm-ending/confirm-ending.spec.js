import { confirmEnding } from './confirm-ending';

describe('confirmEnding', () => {
  it('confirmEnding("Bastian", "n") should return true', () => {
    expect(confirmEnding('Bastian', 'n')).toBe(true);
  });

  it('confirmEnding("Connor", "n") should return false', () => {
    expect(confirmEnding('Connor', 'n')).toBe(false);
  });

  it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false', () => {
    expect(
      confirmEnding(
        'Walking on water and developing software from a specification are easy if both are frozen',
        'specification'
      )
    ).toBe(false);
  });

  it('confirmEnding("He has to give me a new name", "name") should return true', () => {
    expect(confirmEnding('He has to give me a new name', 'name')).toBe(true);
  });

  it('confirmEnding("Open sesame", "same") should return true', () => {
    expect(confirmEnding('Open sesame', 'same')).toBe(true);
  });

  it('confirmEnding("Open sesame", "pen") should return false', () => {
    expect(confirmEnding('Open sesame', 'pen')).toBe(false);
  });

  it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false', () => {
    expect(
      confirmEnding(
        'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
        'mountain'
      )
    ).toBe(false);
  });
});
