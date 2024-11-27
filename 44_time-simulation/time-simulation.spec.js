import { TimeSimulation } from './time-simulation';

describe('TimeSimulation', () => {
  const sim = new TimeSimulation();

  it('time should be counted from zero', () => {
    expect(sim.get()).toBe(0);
  });

  it('should update time to 10', () => {
    sim.update(10);
    expect(sim.get()).toBe(10);
  });

  it('should update time to equals to 12', () => {
    sim.update(12);
    sim.setSpeed(3);
    expect(sim.get()).toBe(12);
  });

  it('update time to 15 should return time equals to 21', () => {
    sim.update(15);
    expect(sim.get()).toBe(21);
  });

  it('update time to 17 should return time equals to 27', () => {
    sim.update(17);
    expect(sim.get()).toBe(27);
  });

  it('set speed to 1 should return time equals to 27', () => {
    sim.setSpeed(1);
    expect(sim.get()).toBe(27);
  });

  it('update time to 18 should return time equals to 28', () => {
    sim.update(18);
    expect(sim.get()).toBe(28);
  });
});
