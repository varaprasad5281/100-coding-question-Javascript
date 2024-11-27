import { searchAndReplace } from './search-and-replace';

describe('searchAndReplace', () => {
  it('searchAndReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall"', () => {
    expect(searchAndReplace('Let us go to the store', 'store', 'mall')).toBe('Let us go to the mall');
  });

  it('searchAndReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch"', () => {
    expect(searchAndReplace('He is Sleeping on the couch', 'Sleeping', 'sitting')).toBe('He is Sitting on the couch');
  });

  it('searchAndReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error"', () => {
    expect(searchAndReplace('This has a spellngi error', 'spellngi', 'spelling')).toBe('This has a spelling error');
  });

  it('searchAndReplace("His name is Tom", "Tom", "john") should return "His name is John"', () => {
    expect(searchAndReplace('His name is Tom', 'Tom', 'john')).toBe('His name is John');
  });

  it('searchAndReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms"', () => {
    expect(searchAndReplace('Let us get back to more Coding', 'Coding', 'algorithms')).toBe(
      'Let us get back to more Algorithms'
    );
  });
});
