export class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; 
  }
}

export class Stack {
  constructor() {
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.prev = this.last; 
    this.last = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    const poppedValue = this.last.value;
    this.last = this.last.prev;
    this.size--;

    return poppedValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}
