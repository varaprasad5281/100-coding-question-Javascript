export const updateInventory = (curInv, newInv) => {
  let comInventory = [...curInv, ...newInv];
  const inventoryMap = {};

  for (const [quantity, item] of comInventory) {
    if (inventoryMap[item]) {
      inventoryMap[item] += quantity;
    } else {
      inventoryMap[item] = quantity;
    }
  }

  const updatedInventory = Object.entries(inventoryMap).map(([item, quantity]) => [quantity, item]);
  updatedInventory.sort((a, b) => {
    const itemA = a[1].toLowerCase();
    const itemB = b[1].toLowerCase();
    if (itemA < itemB) return -1;
    if (itemA > itemB) return 1;
    return 0;
  });

  return updatedInventory;
};
