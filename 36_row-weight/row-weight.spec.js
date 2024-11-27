import { rowWeights } from './row-weight';

describe('rowWeights', () => {
  it('rowWeights([13, 27, 49]) should  return [62, 27]', () => {
    expect(rowWeights([13, 27, 49])).toEqual([62, 27]);
  });

  it('rowWeights([50, 60, 70, 80]) should  return [120, 140]', () => {
    expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
  });

  it('rowWeights([80]) should return [80, 0]', () => {
    expect(rowWeights([80])).toEqual([80, 0]);
  });

  it('rowWeights([100, 50]) should return [100, 50]', () => {
    expect(rowWeights([100, 50])).toEqual([100, 50]);
  });

  it('rowWeights([70, 58, 75, 34, 91]) should return [236, 92]', () => {
    expect(rowWeights([70, 58, 75, 34, 91])).toEqual([236, 92]);
  });

  it('rowWeights([29, 83, 67, 53, 19, 28, 96]) should return [211, 164]', () => {
    expect(rowWeights([29, 83, 67, 53, 19, 28, 96])).toEqual([211, 164]);
  });

  it('rowWeights([100, 51, 50, 100]) should return [150, 151]', () => {
    expect(rowWeights([100, 51, 50, 100])).toEqual([150, 151]);
  });

  it('rowWeights([39, 84, 74, 18, 59, 72, 35, 61]) should return [207, 235]', () => {
    expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
  });
});
