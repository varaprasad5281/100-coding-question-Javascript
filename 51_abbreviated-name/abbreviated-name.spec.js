import { abbreviatedName } from './abbreviated-name';

describe('abbreviatedName', () => {
  it('abbreviatedName("Verbovyi") should be a string', () => {
    expect(typeof abbreviatedName('Verbovyi')).toBe('string');
  });

  it('abbreviatedName("Verbovyi") should be "Verbovyi"', () => {
    expect(abbreviatedName('Verbovyi')).toBe('Verbovyi');
  });

  it('abbreviatedName("Verbovyi Dmytro") should be "Verbovyi D."', () => {
    expect(abbreviatedName('Verbovyi Dmytro')).toBe('Verbovyi D.');
  });

  it('abbreviatedName("Verbovyi Dmytro Oleksandrovych") should be "Verbovyi D. O."', () => {
    expect(abbreviatedName('Verbovyi Dmytro Oleksandrovych')).toBe('Verbovyi D. O.');
  });
});
