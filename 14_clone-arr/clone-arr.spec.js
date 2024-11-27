import { cloneArr } from './clone-arr';

describe('cloneArr', () => {
  it('cloneArr([]) should return an array', () => {
    expect(Array.isArray(cloneArr([]))).toBe(true);
  });

  it('should not mutate the original array', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = cloneArr(original);

    copy.splice(0, 3);

    expect(original).toHaveLength(5);
  });
});
