import { lookupProfile } from './lookup-profile';

describe('lookupProfile', () => {
  it('lookupProfile("Kristian", "lastName") should return "Vos"', () => {
    expect(lookupProfile('Kristian', 'lastName')).toBe('Vos');
  });

  it('lookupProfile("Sherlock", "likes") should return ["Intriguing Cases", "Violin"]', () => {
    expect(lookupProfile('Sherlock', 'likes')).toEqual(['Intriguing Cases', 'Violin']);
  });

  it('lookupProfile("Harry", "likes") should return an array', () => {
    expect(Array.isArray(lookupProfile('Harry', 'likes'))).toBe(true);
  });

  it('lookupProfile("Bob", "number") should return "No such contact"', () => {
    expect(lookupProfile('Bob', 'number')).toBe('No such contact');
  });

  it('lookupProfile("Akira", "address") should return "No such property"', () => {
    expect(lookupProfile('Akira', 'address')).toBe('No such property');
  });

  it('lookupProfile("Harry", "points") should return 0', () => {
    expect(lookupProfile('Harry', 'points')).toBe(0);
  });
});
