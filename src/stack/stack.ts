export class Stack<T> {
  private items: Record<number, T>;
  private count: number;

  constructor () {
    this.items = {};
    this.count = 0;
  }

  push(element: T) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const element = this.items[this.count];

    delete this.items[this.count];
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return !this.count
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    
    }

    return objString;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}