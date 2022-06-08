import Deque from '../deque';

describe('Deque', () => {
  let deque: Deque<number>;
  
  beforeEach(() => {
    deque = new Deque(); 
  });

  it('should starts empty', () => {
    expect(deque.size()).toEqual(0);
    expect(deque.isEmpty()).toEqual(true);
  });

  it('should add elements in the back', () => {
    Array.from({ length: 3 }).forEach((_, index) => {
      deque.addBack(index);
      expect(deque.size()).toEqual(index + 1);
    });

    deque.removeFront();
    deque.addFront(4);
    expect(deque.size()).toEqual(3);
  });

  it('should add elements in the front', () => {
    Array.from({ length: 3 }).forEach((_, index) => {
      deque.addFront(index);
      expect(deque.size()).toEqual(index + 1);
    });

    deque.removeFront();
    deque.addFront(4);
    expect(deque.size()).toEqual(3);
  });

  it('should remove elements from the back', () => {
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);

    expect(deque.removeBack()).toEqual(3);
    expect(deque.removeBack()).toEqual(2);
    expect(deque.removeBack()).toEqual(1);
    expect(deque.removeBack()).toEqual(0);
    expect(deque.removeBack()).toBeUndefined();
  });

  it('remove elements from the front', () => {
    deque.addFront(1);
    deque.addBack(2);
    deque.addBack(3);
    deque.addFront(0);
    deque.addFront(-1);
    deque.addFront(-2);

    expect(deque.removeFront()).toEqual(-2);
    expect(deque.removeFront()).toEqual(-1);
    expect(deque.removeFront()).toEqual(0);
    expect(deque.removeFront()).toEqual(1);
    expect(deque.removeFront()).toEqual(2);
    expect(deque.removeFront()).toEqual(3);
    expect(deque.removeFront()).toBeUndefined();
  });

  it('allows to peek at the front element in the deque without removing it', () => {
    expect(deque.peekFront()).toBeUndefined();

    deque.addFront(1);
    expect(deque.peekFront()).toEqual(1);
    deque.addBack(2);
    expect(deque.peekFront()).toEqual(1);
    deque.addBack(3);
    expect(deque.peekFront()).toEqual(1);
    deque.addFront(0);
    expect(deque.peekFront()).toEqual(0);
    deque.addFront(-1);
    expect(deque.peekFront()).toEqual(-1);
    deque.addFront(-2);
    expect(deque.peekFront()).toEqual(-2);
  });

  it('allows to peek at the last element in the deque without removing it', () => {
    expect(deque.peekBack()).toBeUndefined();

    deque.addFront(1);
    expect(deque.peekBack()).toEqual(1);
    deque.addBack(2);
    expect(deque.peekBack()).toEqual(2);
    deque.addBack(3);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(0);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(-1);
    expect(deque.peekBack()).toEqual(3);
    deque.addFront(-2);
    expect(deque.peekBack()).toEqual(3);
  });

  it('returns the correct size', () => {
    expect(deque.size()).toEqual(0);

    deque.addFront(1);
    expect(deque.size()).toEqual(1);
    deque.addBack(2);
    expect(deque.size()).toEqual(2);
    deque.addBack(3);
    expect(deque.size()).toEqual(3);
    deque.addFront(0);
    expect(deque.size()).toEqual(4);
    deque.addFront(-1);
    expect(deque.size()).toEqual(5);
    deque.addFront(-2);
    expect(deque.size()).toEqual(6);

    deque.clear();
    expect(deque.size()).toEqual(0);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.size()).toEqual(2);

    deque.removeFront();
    deque.removeBack();
    expect(deque.size()).toEqual(0);
  });

  it('returns if it is empty', () => {
    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    expect(deque.isEmpty()).toEqual(false);
    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.clear();
    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.removeFront();
    expect(deque.isEmpty()).toEqual(false);
    deque.removeBack();
    expect(deque.isEmpty()).toEqual(true);
  });

  it('clears the queue', () => {
    deque.clear();
    expect(deque.isEmpty()).toEqual(true);

    deque.addFront(1);
    deque.addBack(2);
    expect(deque.isEmpty()).toEqual(false);

    deque.clear();
    expect(deque.isEmpty()).toEqual(true);
  });

  it('returns toString primitive types', () => {
    expect(deque.toString()).toEqual('');

    deque.addFront(1);
    expect(deque.toString()).toEqual('1');

    deque.addBack(2);
    expect(deque.toString()).toEqual('1,2');

    deque.clear();
    expect(deque.toString()).toEqual('');

    const queueString = new Deque<string>();
    queueString.addFront('el1');
    expect(queueString.toString()).toEqual('el1');

    queueString.addBack('el2');
    expect(queueString.toString()).toEqual('el1,el2');
  });

  it('returns toString objects', () => {
    class MyObj {
      constructor(public el1: any, public el2: any) {}
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const dequeMyObj = new Deque<MyObj>();
    expect(dequeMyObj.toString()).toEqual('');

    dequeMyObj.addFront(new MyObj(1, 2));
    expect(dequeMyObj.toString()).toEqual('1|2');

    dequeMyObj.addBack(new MyObj(3, 4));
    expect(dequeMyObj.toString()).toEqual('1|2,3|4');
  });
});
