import { validateUSTelephoneNumber } from './validate-us-telephone-number';

describe('validateUSTelephoneNumber', () => {
  it('validateUSTelephoneNumber("555-555-5555") should return a boolean', () => {
    expect(typeof validateUSTelephoneNumber('555-555-5555')).toBe('boolean');
  });

  it('validateUSTelephoneNumber("1 555-555-5555") should return a true', () => {
    expect(validateUSTelephoneNumber('1 555-555-5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("1 (555) 555-5555") should return a true', () => {
    expect(validateUSTelephoneNumber('1 (555) 555-5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("5555555555") should return a true', () => {
    expect(validateUSTelephoneNumber('5555555555')).toBe(true);
  });

  it('validateUSTelephoneNumber("555-555-5555") should return a true', () => {
    expect(validateUSTelephoneNumber('555-555-5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("(555)555-5555") should return a true', () => {
    expect(validateUSTelephoneNumber('(555)555-5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("1(555)555-5555") should return a true', () => {
    expect(validateUSTelephoneNumber('1(555)555-5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("555-5555") should return a false', () => {
    expect(validateUSTelephoneNumber('555-5555')).toBe(false);
  });

  it('validateUSTelephoneNumber("5555555") should return a false', () => {
    expect(validateUSTelephoneNumber('5555555')).toBe(false);
  });

  it('validateUSTelephoneNumber("1 555)555-5555") should return a false', () => {
    expect(validateUSTelephoneNumber('1 555)555-5555')).toBe(false);
  });

  it('validateUSTelephoneNumber("1 555 555 5555") should return a true', () => {
    expect(validateUSTelephoneNumber('1 555 555 5555')).toBe(true);
  });

  it('validateUSTelephoneNumber("1 456 789 4444") should return a true', () => {
    expect(validateUSTelephoneNumber('1 456 789 4444')).toBe(true);
  });

  it('validateUSTelephoneNumber("123**&!!asdf#") should return a false', () => {
    expect(validateUSTelephoneNumber('123**&!!asdf#')).toBe(false);
  });

  it('validateUSTelephoneNumber("55555555") should return a false', () => {
    expect(validateUSTelephoneNumber('55555555')).toBe(false);
  });

  it('validateUSTelephoneNumber("(6505552368)") should return a false', () => {
    expect(validateUSTelephoneNumber('(6505552368)')).toBe(false);
  });

  it('validateUSTelephoneNumber("2 (757) 622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('2 (757) 622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("0 (757) 622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('0 (757) 622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("-1 (757) 622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('-1 (757) 622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("2 757 622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('2 757 622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("10 (757) 622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('10 (757) 622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("27576227382") should return a false', () => {
    expect(validateUSTelephoneNumber('27576227382')).toBe(false);
  });

  it('validateUSTelephoneNumber("(275)76227382") should return a false', () => {
    expect(validateUSTelephoneNumber('(275)76227382')).toBe(false);
  });

  it('validateUSTelephoneNumber("2(757)6227382") should return a false', () => {
    expect(validateUSTelephoneNumber('2(757)6227382')).toBe(false);
  });

  it('validateUSTelephoneNumber("2(757)622-7382") should return a false', () => {
    expect(validateUSTelephoneNumber('2(757)622-7382')).toBe(false);
  });

  it('validateUSTelephoneNumber("555)-555-5555") should return a false', () => {
    expect(validateUSTelephoneNumber('555)-555-5555')).toBe(false);
  });

  it('validateUSTelephoneNumber("(555-555-5555") should return a false', () => {
    expect(validateUSTelephoneNumber('(555-555-5555')).toBe(false);
  });

  it('validateUSTelephoneNumber("(555)5(55?)-5555") should return a false', () => {
    expect(validateUSTelephoneNumber('(555)5(55?)-5555')).toBe(false);
  });
});
