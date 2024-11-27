import { arrayLeaders } from './array-leaders';

describe('arrayLeaders', () => {
  it('arrayLeaders([1, 2, 3, 4, 0]) should return return [4]', () => {
    expect(arrayLeaders([1, 2, 3, 4, 0])).toEqual([4]);
  });

  it('arrayLeaders([16, 17, 4, 3, 5, 2]) should return [17, 5, 2]', () => {
    expect(arrayLeaders([16, 17, 4, 3, 5, 2])).toEqual([17, 5, 2]);
  });

  it('arrayLeaders([5, 2, -1]) should return return [5, 2]', () => {
    expect(arrayLeaders([5, 2, -1])).toEqual([5, 2]);
  });

  it('arrayLeaders([0, -1, -29, 3, 2]) should return [0, -1, 3, 2]', () => {
    expect(arrayLeaders([0, -1, -29, 3, 2])).toEqual([0, -1, 3, 2]);
  });

  it('arrayLeaders([-1, -29, -26, -2]) should return [-1]', () => {
    expect(arrayLeaders([-1, -29, -26, -2])).toEqual([-1]);
  });

  it('arrayLeaders([-36, -12, -27]) should return [-36, -12]', () => {
    expect(arrayLeaders([-36, -12, -27])).toEqual([-36, -12]);
  });

  it('arrayLeaders[5, 2]) should return [5, 2]', () => {
    expect(arrayLeaders([5, 2])).toEqual([5, 2]);
  });
});
