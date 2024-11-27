import { carrying } from './carrying';

describe('carrying', () => {
  it('carrying(2, 3) should return 5', () => {
    expect(carrying(2, 3)).toBe(5);
  });

  it('carrying(2)(3) should return 5', () => {
    expect(carrying(2)(3)).toBe(5);
  });

  it('carrying("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined', () => {
    expect(carrying('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBeUndefined();
  });

  it('carrying(2, "3") should return undefined', () => {
    expect(carrying(2, '3')).toBeUndefined();
  });

  it('carrying(2)([3]) should return undefined', () => {
    expect(carrying(2)([3])).toBeUndefined();
  });
});
