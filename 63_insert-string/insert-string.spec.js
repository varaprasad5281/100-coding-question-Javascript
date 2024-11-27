import { insertString } from './insert-string';

describe('insertString', () => {
  it('insertString("We are doing some exercises.") should return "We are doing some exercises"', () => {
    expect(insertString('We are doing some exercises.')).toBe('We are doing some exercises.');
  });

  it('insertString("We are doing some exercises.", "JavaScript ") should return "JavaScript We are doing some exercises."', () => {
    expect(insertString('We are doing some exercises.', 'JavaScript ')).toBe('JavaScript We are doing some exercises.');
  });

  it('insertString("We are doing some exercises.", "JavaScript ", 18) should return "We are doing some JavaScript exercises."', () => {
    expect(insertString('We are doing some exercises.', 'JavaScript ', 18)).toBe(
      'We are doing some JavaScript exercises.'
    );
  });
});
