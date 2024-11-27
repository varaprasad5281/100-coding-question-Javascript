import { peopleInBus } from './people-in-bus';

describe('peopleInBus', () => {
  it('peopleInBus([[10, 0], [3, 5], [5, 8]]) should return 5', () => {
    expect(
      peopleInBus([
        [10, 0],
        [3, 5],
        [5, 8],
      ])
    ).toBe(5);
  });

  it('peopleInBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) should return 17', () => {
    expect(
      peopleInBus([
        [3, 0],
        [9, 1],
        [4, 10],
        [12, 2],
        [6, 1],
        [7, 10],
      ])
    ).toBe(17);
  });

  it('peopleInBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) should return 21;', () => {
    expect(
      peopleInBus([
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ])
    ).toBe(21);
  });
});
