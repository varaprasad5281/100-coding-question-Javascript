// import { workingHours } from './working-hours';

const INPUT_DATA = [
  {
    day: 'sat',
    from: '10:00',
    to: '23:00',
  },
  {
    day: 'mon',
    from: '11:00',
    to: '23:00',
  },
  {
    day: 'tue',
    from: '11:00',
    to: '23:00',
  },
  {
    day: 'wed',
    from: '11:00',
    to: '23:00',
  },
  {
    day: 'thu',
    from: '12:00',
    to: '23:00',
  },
  {
    day: 'fri',
    from: '12:00',
    to: '23:00',
  },
  {
    day: 'sun',
    from: '11:00',
    to: '23:00',
  },
];

const OUTPUT_DATA = [
  'MON - WED: 11:00 - 23:00',
  'THU - FRI: 12:00 - 23:00',
  'SAT: 10:00 - 23:00',
  'SUN: 11:00 - 23:00',
];

const INPUT_DATA2 = [
  {
    day: 'mon',
    from: '10:00',
    to: '23:00',
  },
  {
    day: 'fri',
    from: '10:00',
    to: '23:00',
  },
  {
    day: 'sun',
    from: '11:00',
    to: '23:00',
  },
];

const OUTPUT_DATA2 = [
  'MON: 10:00 - 23:00',
  'FRI: 10:00 - 23:00',
  'SUN: 11:00 - 23:00',
];

describe.skip('workingHours', () => {
  it(`workingHours(${INPUT_DATA}) should return an array`, () => {
    expect(Array.isArray(workingHours(INPUT_DATA))).toBe(true);
  });

  it('workingHours([]) should return an empty array', () => {
    expect(workingHours([])).toEqual([]);
  });

  it(`workingHours(${INPUT_DATA}) should return ${OUTPUT_DATA}`, () => {
    expect(workingHours(INPUT_DATA)).toEqual(OUTPUT_DATA);
  });

  it(`workingHours(${INPUT_DATA2}) should return ${OUTPUT_DATA2}`, () => {
    expect(workingHours(INPUT_DATA2)).toEqual(OUTPUT_DATA2);
  });
});
