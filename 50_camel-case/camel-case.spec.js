import './camel-case';

describe('camelCase', () => {
  it('"hello case".camelCase() should return "HelloCase"', () => {
    expect('hello case'.camelCase()).toBe('HelloCase');
  });

  it('"camel case word".camelCase() should return "CamelCaseWord"', () => {
    expect('camel case word'.camelCase()).toBe('CamelCaseWord');
  });
});
