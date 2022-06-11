import { verifyIfIsCircle } from "../slowAndFastPointer";
import { MyLinkedList, NodeItem } from "../../../data-structure/linked-list";

describe('Fast and Slow pointer', () => {
  describe('verify if a linked list is circular' ,() => {
    it('should return false if passed a empty linked list', () => {
      const linkedList = new MyLinkedList();

      expect(verifyIfIsCircle(linkedList)).toBe(false);
    });

    it('should return false in slow pointer', () => {
      const linkedList = new MyLinkedList();
      linkedList.insertNodeToTail(new NodeItem(true));

      expect(verifyIfIsCircle(linkedList)).toBe(false);
    });

    it('should return true if the linked list is a circle', () => {
      const linkedList = new MyLinkedList();
      Array.from({ length: 10 }).forEach((_, index) => {
        if (index === 9) {
          linkedList.insertNodeToTail(linkedList._head);
          return
        }

        linkedList.insertNodeToTail(new NodeItem(index));
      });

      expect(verifyIfIsCircle(linkedList)).toBe(true);
    });

    it("should return false if the linked isn't a circle", () => {
      const linkedList = new MyLinkedList();
      Array.from({ length: 10 }).forEach((_, index) => {
        linkedList.insertNodeToTail(new NodeItem(index));
      });

      expect(verifyIfIsCircle(linkedList)).toBe(false);
    });
  });
});