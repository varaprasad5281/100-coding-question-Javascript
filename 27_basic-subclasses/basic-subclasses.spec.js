import { God, Human, Man, Woman } from './basic-subclasses';

describe('basic subclasses', () => {
  const humans = God.create();

  it('God should create two humans', () => {
    expect(humans[0] instanceof Human).toBe(true);
    expect(humans[1] instanceof Human).toBe(true);
  });

  it('first human should be a Man', () => {
    expect(humans[0].sex).toBe('male');
    expect(humans[0] instanceof Man).toBe(true);
  });

  it('second human should be a Woman', () => {
    expect(humans[1].sex).toBe('female');
    expect(humans[1] instanceof Woman).toBe(true);
  });

  it('the name of a man should be Adam', () => {
    expect(humans[0].name).toBe('Adam');
  });

  it('the name of a woman should be Eve', () => {
    expect(humans[1].name).toBe('Eve');
  });
});
