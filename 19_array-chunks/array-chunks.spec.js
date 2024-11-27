import { arrayChunks} from './array-chunks';

describe('arrayChunks', () => {
  it('arrayChunks(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]', () => {
    expect(arrayChunks(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
    ]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5], 2) should return  [[0, 1], [2, 3], [4, 5]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5], 2)).toEqual([
      [0, 1],
      [2, 3],
      [4, 5],
    ]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([[0, 1, 2], [3, 4, 5], [6]]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
  });

  it('arrayChunks([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
    expect(arrayChunks([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
  });
});
