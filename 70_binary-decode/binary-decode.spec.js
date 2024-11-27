import { binaryDecode } from './binary-decode';
import { TEST_BLOCKS } from '../_test-data/test-blocks';

describe('binaryDecode', () => {
  it('should return a string', () => {
    expect(typeof binaryDecode(TEST_BLOCKS[0].binary)).toBe('string');
  });

  it('should return correct encoded values', () => {
    TEST_BLOCKS.forEach(({ binary, text }) => expect(binaryDecode(binary)).toBe(text));
  });
});
