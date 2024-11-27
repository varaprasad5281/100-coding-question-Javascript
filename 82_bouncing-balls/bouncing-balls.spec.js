import { bouncingBalls } from './bouncing-balls';

describe('bouncingBalls', () => {
  it('bouncingBalls(3.0, 0.66, 1.5) should return 3', () => {
    expect(bouncingBalls(3.0, 0.66, 1.5)).toBe(3);
  });

  it('bouncingBalls(30.0, 0.66, 1.5) should return 15', () => {
    expect(bouncingBalls(30.0, 0.66, 1.5)).toBe(15);
  });

  it('bouncingBalls(30, 0.9999999999, 1) should return 68023942001', () => {
    expect(bouncingBalls(30, 0.9999999999, 1)).toBe(68023942001);
  });
});
