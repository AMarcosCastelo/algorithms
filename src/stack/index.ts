import { MyLinkedList } from "../linked-list";

export const printLinkedList = (linkedList: MyLinkedList) => {
  let node = linkedList.head();

  while (node) {
    console.log(node.value);
    node = node.next;
  }
}

export const printReversedLinkedList = (linkedList: MyLinkedList) => {
  const stack = [];
  let node = linkedList.head();

  while (node) {
    stack.push(node);
    node = node.next;
  }

  while (stack.length) {
    console.log(stack.pop()!.value);
  }
}
