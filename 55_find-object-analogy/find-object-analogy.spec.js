import { findObjectAnalogy } from './find-object-analogy';

describe('findObjectAnalogy', () => {
  it('findObjectAnalogy([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]', () => {
    expect(
      JSON.stringify(
        findObjectAnalogy(
          [
            { first: 'Romeo', last: 'Montague' },
            { first: 'Mercutio', last: null },
            { first: 'Tybalt', last: 'Capulet' },
          ],
          { last: 'Capulet' }
        )
      )
    ).toBe(JSON.stringify([{ first: 'Tybalt', last: 'Capulet' }]));
  });

  it('findObjectAnalogy([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]', () => {
    expect(JSON.stringify(findObjectAnalogy([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }], { a: 1 }))).toBe(
      JSON.stringify([{ a: 1 }, { a: 1 }, { a: 1, b: 2 }])
    );
  });

  it('findObjectAnalogy([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }) should return [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]', () => {
    expect(JSON.stringify(findObjectAnalogy([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, b: 2 }))).toBe(
      JSON.stringify([
        { a: 1, b: 2 },
        { a: 1, b: 2, c: 2 },
      ])
    );
  });

  it('findObjectAnalogy([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }) should return [{ "a": 1, "b": 2, "c": 2 }]', () => {
    expect(JSON.stringify(findObjectAnalogy([{ a: 1, b: 2 }, { a: 1 }, { a: 1, b: 2, c: 2 }], { a: 1, c: 2 }))).toBe(
      JSON.stringify([{ a: 1, b: 2, c: 2 }])
    );
  });
});
