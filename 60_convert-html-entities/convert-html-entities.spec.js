import { convertHTMLEntities } from './convert-html-entities';

describe('convertHTMLEntities', () => {
  it('convertHTMLEntities("Dolce & Gabbana") should return "Dolce &amp; Gabbana"', () => {
    expect(convertHTMLEntities('Dolce & Gabbana')).toBe('Dolce &amp; Gabbana');
  });

  it('convertHTMLEntities("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos"', () => {
    expect(convertHTMLEntities('Hamburgers < Pizza < Tacos')).toBe('Hamburgers &lt; Pizza &lt; Tacos');
  });

  it('convertHTMLEntities("Sixty > twelve") should return "Sixty &gt; twelve"', () => {
    expect(convertHTMLEntities('Sixty > twelve')).toBe('Sixty &gt; twelve');
  });

  it('convertHTMLEntities(\'Stuff in "quotation marks"\') should return "Stuff in &quot;quotation marks&quot;"', () => {
    expect(convertHTMLEntities('Stuff in "quotation marks"')).toBe('Stuff in &quot;quotation marks&quot;');
  });

  it('convertHTMLEntities("Shindler\'s List") should return "Shindler&apos;s List"', () => {
    expect(convertHTMLEntities("Shindler's List")).toBe('Shindler&apos;s List');
  });

  it('convertHTMLEntities("<>") should return "&lt;&gt;"', () => {
    expect(convertHTMLEntities('<>')).toBe('&lt;&gt;');
  });
});
