import { datatype } from 'faker';

import { printLinkedList, printReversedLinkedList } from "../stack";
import { MyLinkedList, NodeItem } from "../../linked-list";

describe('Stack with a linked list', () => {
  let linkedList: MyLinkedList;
  const logSpy = jest.spyOn(console, 'log');

  beforeEach(() => {
    linkedList = new MyLinkedList();
  });

  it('should print a linked list', () => {
    const arrayHelperLength = datatype.number({ min: 1, max: 10 });
    const arrayHelper = Array.from({ length: arrayHelperLength});

    arrayHelper.forEach((_, i) => {
      linkedList.insertNodeToTail(new NodeItem(i + 1));
    });
    printLinkedList(linkedList);

    arrayHelper.forEach((_, i) =>
      expect(logSpy).toHaveBeenCalledWith(i + 1));
    expect(logSpy).toHaveBeenCalledTimes(arrayHelperLength);
  });

  it('should reverse and print a linked list', () => {
    const arrayHelperLength = datatype.number({ min: 1, max: 10 });
    const arrayHelper = Array.from({ length: arrayHelperLength });

    arrayHelper.forEach((_, i) => {
      linkedList.insertNodeToTail(new NodeItem(i + 1));
    });
    printReversedLinkedList(linkedList);


    arrayHelper.reverse().forEach((_, i) => 
      expect(logSpy).toHaveBeenCalledWith(i + 1));
    expect(logSpy).toHaveBeenCalledTimes(arrayHelperLength);
  });
});
