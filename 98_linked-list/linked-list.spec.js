import { LinkedList } from './linked-list';

describe('LinkedList', () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it('should have amount 0 if no cells were added', () => {
    expect(list.amount).toBe(0);
  });

  it('should be able to push cells', () => {
    expect(list.head).toBeNull();

    list.push(5);

    expect(list.head.value).toBe(5);
  });

  it('should provide correct `next` property work', () => {
    list.push(5);
    list.push(10);
    list.push(20);

    expect(list.head.value).toBe(5);
    expect(list.head.next.value).toBe(10);
    expect(list.head.next.next.value).toBe(20);
  });

  it('should call callback function with every cell when passed into iterate method', () => {
    const arr = [];
    const firstCellValue = 10;
    const secondCellValue = 20;

    function cb(cell) {
      arr.push(cell.value);
    }

    list.push(firstCellValue);
    list.push(secondCellValue);

    list.iterate(cb);

    expect(arr).toEqual([firstCellValue, secondCellValue]);
  });

  it('pop method should remove cell from the end', () => {
    const firstValue = 5;
    const secondValue = 10;
    const thirdValue = 20;

    list.push(firstValue);
    list.push(secondValue);
    list.push(thirdValue);

    expect(list.tail.value).toEqual(thirdValue);

    list.pop();

    expect(list.tail.value).toEqual(secondValue);

    list.pop();

    expect(list.tail.value).toEqual(firstValue);

    list.pop();

    expect(list.tail).toBeNull();
  });

  describe.skip('insertAfter method', () => {
    const firstValue = 5;
    const secondValue = 10;
    const valueToInsert = 30;

    it('should return false when trying to insert after not existed value', () => {
      const notExistedValue = 99;

      list.push(firstValue);
      list.push(secondValue);

      const failResult = list.insertAfter(notExistedValue, valueToInsert);

      expect(failResult).toBe(false);
      expect(list.amount).toBe(2);
    });

    it('has to insert a new cell after one with specified value', () => {
      const thirdValue = 20;

      list.push(firstValue);
      list.push(secondValue);
      list.push(thirdValue);
      list.insertAfter(secondValue, valueToInsert);

      expect(list.head.next.next.value).toBe(valueToInsert);
      expect(list.tail.value).toBe(thirdValue);
    });
  });

  describe.skip('removeItem method', () => {
    const firstValue = 1;
    const existedValue = 2;
    const notExistedValue = 3;

    it('should return true if passed value is removed', () => {
      list.push(firstValue);
      list.push(existedValue);

      const result = list.removeItem(existedValue);

      expect(result).toBe(true);
    });

    it('should remove item from the list if one exist', () => {
      list.push(firstValue);
      list.push(existedValue);

      expect(list.head.next.value).toBe(existedValue);

      list.removeItem(existedValue);

      expect(list.head.next).toBeNull();
    });

    it('should not effect list for not existed value', () => {
      list.push(firstValue);
      list.push(existedValue);
      list.removeItem(notExistedValue);

      expect(list.head.value).toBe(firstValue);
      expect(list.head.next.value).toBe(existedValue);
      expect(list.head.next.next).toBeNull();
    });
  });
});
