export class Stack<T> {
  private _items: Record<number, T>;
  private _count: number;

  constructor () {
    this._items = {};
    this._count = 0;
  }

  push(element: T) {
    this._items[this._count] = element;
    this._count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this._count--;
    const element = this._items[this._count];

    delete this._items[this._count];
    return element;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._count - 1];
  }

  size() {
    return this._count;
  }

  isEmpty() {
    return !this._count
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this._items[0]}`;

    for (let i = 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`;
    
    }

    return objString;
  }

  clear() {
    this._items = {};
    this._count = 0;
  }
}