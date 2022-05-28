import { MyLinkedList, NodeItem } from "../linkedList";

describe('Linked list', () => {
  let linkedList: MyLinkedList;

  beforeEach(() => {
    linkedList = new MyLinkedList();
  });

  it('should insert node to tail', () => {
    const node = new NodeItem(1);

    linkedList.insertNodeToTail(node);
    expect(linkedList.tail()).toBe(node);
  });

  it('should insert node to head', () => {
    const head = new NodeItem('head');

    linkedList.insertNodeToHead(head);
    expect(linkedList.head()).toBe(head);
  });

  it('should insert two node to head', () => {
    const head1 = new NodeItem('head1');
    const head2 = new NodeItem('head2');

    linkedList.insertNodeToHead(head1);
    linkedList.insertNodeToHead(head2);
    expect(linkedList.head()).toBe(head2);
  });

  it('should insert two node to tail', () => {
    const tail1 = new NodeItem('tail1');
    const tail2 = new NodeItem('tail2');

    linkedList.insertNodeToTail(tail1);
    linkedList.insertNodeToTail(tail2);
    expect(linkedList.tail()).toBe(tail2);
  });

  it('should insert node to head and tail', () => {
    const head = new NodeItem('head');
    const tail = new NodeItem('tail');

    linkedList.insertNodeToHead(head);
    linkedList.insertNodeToTail(tail);
    expect(linkedList.tail()).toBe(tail);
    expect(linkedList.head()).toBe(head);
  });

  it('should return true if the list is empty', () => {
    expect(linkedList.isEmpty()).toBeTruthy();
  });

  it('should return false if the list is not empty', () => {
    const node = new NodeItem('node');

    linkedList.insertNodeToHead(node);
    expect(linkedList.isEmpty()).toBeFalsy();
  });
});