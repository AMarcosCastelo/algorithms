import { MyLinkedList } from "../../data-structure/linked-list";

// verify if the linked list is a circle
export const verifyIfIsCircle = (linkedList: MyLinkedList): boolean => {
  let slowPointer = linkedList.head();
  let fastPointer = slowPointer;

  while (slowPointer) {
    if (!slowPointer.next) {
      return false;
    }

    if (!fastPointer?.next) {
      return false;
    }

    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true;
    }

    slowPointer = slowPointer.next;
  }

  return false;
}
