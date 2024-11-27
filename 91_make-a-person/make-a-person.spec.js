import { Person } from './make-a-person';

describe('Person', () => {
  let bob;

  beforeAll(() => {
    bob = new Person('Bob Ross');
  });

  it('bob is an instance of Person', () => {
    expect(bob instanceof Person).toBe(true);
  });

  it('bob.firstName should return undefined', () => {
    expect(bob.firstName).toBeUndefined();
  });

  it('bob.lastName should return undefined', () => {
    expect(bob.lastName).toBeUndefined();
  });

  it('bob.getFirstName() should return "Bob"', () => {
    expect(bob.getFirstName()).toBe('Bob');
  });

  it('bob.getLastName() should return "Ross"', () => {
    expect(bob.getLastName()).toBe('Ross');
  });

  it('bob.getFullName() should return "Bob Ross"', () => {
    expect(bob.getFullName()).toBe('Bob Ross');
  });

  it('bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell")', () => {
    bob.setFirstName('Haskell');
    expect(bob.getFullName()).toBe('Haskell Ross');
  });

  it('bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry")', () => {
    bob.setLastName('Curry');
    expect(bob.getFullName()).toBe('Haskell Curry');
  });

  it('bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    expect(bob.getFullName()).toBe('Haskell Curry');
  });

  it('bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    expect(bob.getFirstName()).toBe('Haskell');
  });

  it('bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")', () => {
    bob.setFullName('Haskell Curry');
    expect(bob.getLastName()).toBe('Curry');
  });
});
