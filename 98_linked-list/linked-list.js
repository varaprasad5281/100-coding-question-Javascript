class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.amount++;
  }

  pop() {
    if (!this.tail) return;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.amount--;
  }

  iterate(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  insertAfter(existingValue, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === existingValue) {
        const newNode = new Node(newValue);
        newNode.next = current.next;
        newNode.prev = current;
        current.next = newNode;
        if (newNode.next) {
          newNode.next.prev = newNode;
        } else {
          this.tail = newNode;
        }
        this.amount++;
        return true;
      }
      current = current.next;
    }
    return false;
  }

  removeItem(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          }
        } else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        this.amount--;
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
