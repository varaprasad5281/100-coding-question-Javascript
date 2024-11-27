import { unpackElements } from './unpack-elements';

describe('unpackElements', () => {
  it('unpackElements([[["a"]], [["b"]]]) should return ["a", "b"]', () => {
    expect(JSON.stringify(unpackElements([[['a']], [['b']]]))).toBe('["a","b"]');
  });

  it('unpackElements([1, [2], [3, [[4]]]])', () => {
    expect(JSON.stringify(unpackElements([1, [2], [3, [[4]]]]))).toBe('[1,2,3,4]');
  });

  it('unpackElements([1, [], [3, [[4]]]])', () => {
    expect(JSON.stringify(unpackElements([1, [], [3, [[4]]]]))).toBe('[1,3,4]');
  });

  it('unpackElements([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4]', () => {
    expect(JSON.stringify(unpackElements([1, {}, [3, [[4]]]]))).toBe('[1,{},3,4]');
  });
});
