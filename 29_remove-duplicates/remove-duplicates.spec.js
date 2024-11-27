import { removeDuplicates } from './remove-duplicates';

describe('removeDuplicates', () => {
  it('removeDuplicates([1]) should return [1]', () => {
    expect(removeDuplicates([1])).toEqual([1]);
  });

  it('removeDuplicates([1,2]) should return [1, 2]', () => {
    expect(removeDuplicates([1, 2])).toEqual([1, 2]);
  });

  it('removeDuplicates([1,1,2]) should return [1, 2]', () => {
    expect(removeDuplicates([1, 1, 2])).toEqual([1, 2]);
  });

  it('removeDuplicates([]) should return []', () => {
    expect(removeDuplicates([])).toEqual([]);
  });

  it('removeDuplicates([2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1]) should return [2, 1]', () => {
    expect(removeDuplicates([2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1])).toEqual([2, 1]);
  });
});
