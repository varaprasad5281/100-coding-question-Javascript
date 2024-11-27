import { validateBet } from './validate-bet';

describe('validateBet', () => {
  it('validateBet "1 2 3 4 5" should return [1, 2, 3, 4, 5]', () => {
    expect(validateBet([5, 90], '1 2 3 4 5').join(',')).toBe('1,2,3,4,5');
  });

  it('validateBet "5 , 3, 1  4, 2" should return [1, 2, 3, 4, 5]', () => {
    expect(validateBet([5, 90], '5 , 3, 1  4,2').join(',')).toBe('1,2,3,4,5');
  });

  it('validateBet "5 , 37, 12  4, 2" should return [1, 2, 3, 4, 5]', () => {
    expect(validateBet([5, 90], '5 , 37, 12  4,2').join(',')).toBe('2,4,5,12,37');
  });

  it('validateBet "5 , 3, 1  4, 1" with non-unique bets should return null', () => {
    expect(validateBet([5, 90], '5 , 3, 1  4, 1')).toBeNull();
  });

  it('validateBet "1, 2; 3, 4, 5" should return null', () => {
    expect(validateBet([5, 90], '1, 2; 3, 4, 5')).toBeNull();
  });

  it('validateBet "1, 2, 3, 4" should return null', () => {
    expect(validateBet([5, 90], '1, 2, 3, 4')).toBeNull();
  });

  it('validateBet "1, 2, 3, 4, 95" should return null', () => {
    expect(validateBet([5, 90], '1, 2, 3, 4, 95')).toBeNull();
  });
});
