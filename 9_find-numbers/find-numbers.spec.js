import { findNumbers } from './find-numbers';

describe('findNumbers', () => {
  it('findNumbers("There are 3 cats but 4 dogs.") should return [3, 4]', () => {
    expect(findNumbers('There are 3 cats but 4 dogs.')).toEqual([3, 4]);
  });

  it('findNumbers("Hell0, sh1ny, w0rld") should return [0, 1, 0]', () => {
    expect(findNumbers('Hell0, sh1ny, w0rld')).toEqual([0, 1, 0]);
  });

  it('findNumbers("s123d") should return [123]', () => {
    expect(findNumbers('s123d')).toEqual([123]);
  });
});
