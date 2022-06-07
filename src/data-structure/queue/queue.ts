export class Queue<T> {
  private _count: number;
  private _lowestCount: number;
  private _items: Record<number, T>;
  
  constructor() {
    this._count = 0;
    this._lowestCount = 0;
    this._items = {};
  }

  enqueue(element: T) {
    this._items[this._count] = element;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this._items[this._lowestCount];
    delete this._items[this._lowestCount];
    this._lowestCount++;
    
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this._items[this._lowestCount];
  }

  toString() {
    if(this.isEmpty()) {
      return '';
    }

    let objString = `${this._items[this._lowestCount]}`;

    for (let i = this._lowestCount + 1; i < this._count; i++) {
      objString = `${objString},${this._items[i]}`;
    }

    return objString;
  }

  isEmpty() {
    return !this._count;
  }

  size() {
    return this._count - this._lowestCount;
  }

  clear() {
    this._items = {};
    this._count = 0;
    this._lowestCount = 0;
  }
}