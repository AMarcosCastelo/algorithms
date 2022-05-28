export class NodeItem {
  value: any;
  next: NodeItem | null;
  constructor(value: unknown) {
    this.value = value;
    this.next = null;
  }
}

export class MyLinkedList {
  readonly _head: NodeItem;

  constructor() {
    this._head = new NodeItem(null);
  }

  insertNodeToTail(node: NodeItem) {
    this.tail().next = node;
  }

  insertNodeToHead(node: NodeItem) {
    if (this._head.next) {
      let headElement = this._head;

      node.next, headElement.next = headElement.next, node;
    }

    this._head.next = node;
  }

  isEmpty() {
    return this._head.next === null;
  }

  head() {
    return this._head.next;
  }

  tail() {
    let current = this._head;

    while (current.next) {
      current = current.next;
    }

    return current;
  }
}
