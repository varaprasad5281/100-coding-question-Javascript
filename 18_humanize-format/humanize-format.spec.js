import { humanizeFormat} from './humanize-format';

describe('humanizeFormat', () => {
  it('humanizeFormat() should return an empty string', () => {
    expect(humanizeFormat()).toBe('');
  });

  it('humanizeFormat(1) should return "1st"', () => {
    expect(humanizeFormat(1)).toBe('1st');
  });

  it('humanizeFormat(8) should return "8th"', () => {
    expect(humanizeFormat(8)).toBe('8th');
  });

  it('humanizeFormat(301) should return "301st"', () => {
    expect(humanizeFormat(301)).toBe('301st');
  });

  it('humanizeFormat(402) should return "402nd"', () => {
    expect(humanizeFormat(402)).toBe('402nd');
  });

  it('humanizeFormat(503) should return "503rd"', () => {
    expect(humanizeFormat(503)).toBe('503rd');
  });

  it('humanizeFormat(11) should return "11th"', () => {
    expect(humanizeFormat(11)).toBe('11th');
  });

  it('humanizeFormat(12) should return "12th"', () => {
    expect(humanizeFormat(12)).toBe('12th');
  });

  it('humanizeFormat(13) should return "13th"', () => {
    expect(humanizeFormat(13)).toBe('13th');
  });
});
