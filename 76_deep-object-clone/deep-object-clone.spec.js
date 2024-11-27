import { deepObjectClone } from './deep-object-clone';

describe('deepObjectClone', () => {
  it('deepObjectClone({}) should return an object', () => {
    expect(typeof deepObjectClone({})).toBe('object');
  });

  it('copy not equal origin', () => {
    const origin = { a: 1, b: { c: 10 } };
    const copy = deepObjectClone(origin);
    expect(origin).not.toBe(copy);
  });

  it('copy values have to be same as origin', () => {
    const origin = { a: 1, b: { c: 10 } };
    const copy = deepObjectClone(origin);
    expect(origin.a).toBe(copy.a);
    expect(origin.b.c).toBe(copy.b.c);
  });

  it('change of copy params should not affect origin params', () => {
    const origin = { a: 1, b: { c: 10 } };
    const copy = deepObjectClone(origin);
    copy.b.c = 12;
    expect(origin.b.c).not.toBe(copy.b.c);
  });
});
