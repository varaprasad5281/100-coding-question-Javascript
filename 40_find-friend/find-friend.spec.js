import { findFriend } from './find-friend';

describe('findFriend', () => {
  it('findFriend(["blue", "blue", "red", "red", "blue", "green"]) should return 1', () => {
    expect(findFriend(['blue', 'blue', 'red', 'red', 'blue', 'green'])).toBe(1);
  });

  it('findFriend(["blue", "red", "blue", "blue", "red", "blue", "red"]) should return 2', () => {
    expect(findFriend(['blue', 'red', 'blue', 'blue', 'red', 'blue', 'red'])).toBe(2);
  });

  it('findFriend(["brown", "brown", "red", "green"]) should return 0', () => {
    expect(findFriend(['brown', 'brown', 'red', 'green'])).toBe(0);
  });

  it('findFriend(["red", "blue", "blue", "red"] should return 2', () => {
    expect(findFriend(['red', 'blue', 'blue', 'red'])).toBe(2);
  });

  it('findFriend(["red", "blue"]) should return 0', () => {
    expect(findFriend(['red', 'blue'])).toBe(0);
  });

  it('findFriend(["blue", "green", "red", "green", "blue", "blue", "red"]) should return 1', () => {
    expect(findFriend(['blue', 'green', 'red', 'green', 'blue', 'blue', 'red'])).toBe(1);
  });

  it('findFriend(["blue", "blue", "blue", "blue", "blue", "blue", "blue"]) should return 0', () => {
    expect(findFriend(['blue', 'blue', 'blue', 'blue', 'blue', 'blue', 'blue'])).toBe(0);
  });

  it('findFriend(["blue", "red", "blue", "red", "red", "blue", "red"]) should return 1', () => {
    expect(findFriend(['blue', 'red', 'blue', 'red', 'red', 'blue', 'red'])).toBe(1);
  });

  it('findFriend(["blue", "red", "blue", "blue"]) should return 1', () => {
    expect(findFriend(['blue', 'red', 'blue', 'blue'])).toBe(1);
  });
});
