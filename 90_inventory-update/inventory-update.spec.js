import { updateInventory } from './inventory-update';

describe('updateInventory', () => {
  it('should return an array', () => {
    const currInv = [];
    const newInv = [];
    const result = updateInventory(currInv, newInv);
    expect(result instanceof Array).toBe(true);
  });

  it('length of result should be 6', () => {
    const currInv = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ];
    const newInv = [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ];
    const result = updateInventory(currInv, newInv);

    expect(result).toHaveLength(6);
  });

  it('should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]', () => {
    const currInv = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ];
    const newInv = [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ];
    const result = updateInventory(currInv, newInv);

    expect(JSON.stringify(result)).toBe(
      JSON.stringify([
        [88, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [3, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [5, 'Microphone'],
        [7, 'Toothpaste'],
      ])
    );
  });

  it('should return [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]', () => {
    const currInv = [
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ];
    const newInv = [];
    const result = updateInventory(currInv, newInv);

    expect(JSON.stringify(result)).toBe(
      JSON.stringify([
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
      ])
    );
  });

  it('should return [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]', () => {
    const currInv = [];
    const newInv = [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ];
    const result = updateInventory(currInv, newInv);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify([
        [67, 'Bowling Ball'],
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [7, 'Toothpaste'],
      ])
    );
  });

  it('should return [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]', () => {
    const currInv = [
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone'],
    ];
    const newInv = [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste'],
    ];
    const result = updateInventory(currInv, newInv);
    expect(JSON.stringify(result)).toBe(
      JSON.stringify([
        [1, 'Bowling Ball'],
        [0, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [1, 'Half-Eaten Apple'],
        [0, 'Microphone'],
        [1, 'Toothpaste'],
      ])
    );
  });
});
