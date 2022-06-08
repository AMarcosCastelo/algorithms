import { Queue } from '../queue';

describe('Queue', () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue();
  }); 

  it('should starts empty', () => {
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should enqueues elements', () => {
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should enqueues elements', () => {
    Array.from({ length: 3 }).forEach((_ ,index) => {
      queue.enqueue(index);
      expect(queue.size()).toEqual(index + 1);
    });
  });

  it('should dequeue elements', () => {
    Array.from({ length: 3 }).forEach((_ ,index) => {
      queue.enqueue(index);
    });

    Array.from({ length: 3 }).forEach((_ ,index) => {
      expect(queue.dequeue()).toEqual(index);
    });

    expect(queue.dequeue()).toBeUndefined();
  });

  it('should implements FIFO logic', () => {
    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);
    queue.enqueue(3);
    expect(queue.peek()).toEqual(1);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
    expect(queue.dequeue()).toBeUndefined();
  });

  it('should allows to peek at the front element in the queue without dequeuing it', () => {
    expect(queue.peek()).toBeUndefined();

    queue.enqueue(1);
    expect(queue.peek()).toEqual(1);

    queue.enqueue(2);
    expect(queue.peek()).toEqual(1);

    queue.dequeue();
    expect(queue.peek()).toEqual(2);
  });

  it('should return the correct size', () => {
    expect(queue.size()).toEqual(0);
    queue.enqueue(1);
    expect(queue.size()).toEqual(1);
    queue.enqueue(2);
    expect(queue.size()).toEqual(2);
    queue.enqueue(3);
    expect(queue.size()).toEqual(3);

    queue.clear();
    expect(queue.isEmpty()).toBeTruthy;

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).toEqual(3);

    queue.dequeue();
    expect(queue.size()).toEqual(2);
    queue.dequeue();
    expect(queue.size()).toEqual(1);
    queue.dequeue();
    expect(queue.size()).toEqual(0);
    expect(queue.dequeue()).toEqual(undefined);
  });

  it('should return if it is empty', () => {
    expect(queue.isEmpty()).toBeTruthy;
    queue.enqueue(1);
    expect(queue.isEmpty()).toBeFalsy();
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy();
    queue.enqueue(3);
    expect(queue.isEmpty()).toBeFalsy();

    queue.clear();
    expect(queue.isEmpty()).toBeTruthy;

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBeFalsy();

    queue.dequeue();
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeFalsy();
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy;
    queue.dequeue();
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('should clear the queue', () => {
    queue.clear();
    expect(queue.isEmpty()).toBeTruthy;

    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.isEmpty()).toBeFalsy();

    queue.clear();
    expect(queue.isEmpty()).toBeTruthy;
  });

  it('should return toString primitive types', () => {
    expect(queue.toString()).toEqual('');

    queue.enqueue(1);
    expect(queue.toString()).toEqual('1');

    queue.enqueue(2);
    expect(queue.toString()).toEqual('1,2');

    queue.clear();
    expect(queue.toString()).toEqual('');

    const queueString = new Queue<string>();
    queueString.enqueue('el1');
    expect(queueString.toString()).toEqual('el1');

    queueString.enqueue('el2');
    expect(queueString.toString()).toEqual('el1,el2');
  });

  it('should return toString objects', () => {
    class MyObj {
      constructor(public el1: any, public el2: any) {}
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const queueMyObj = new Queue<MyObj>();
    expect(queueMyObj.toString()).toEqual('');

    queueMyObj.enqueue(new MyObj(1, 2));
    expect(queueMyObj.toString()).toEqual('1|2');

    queueMyObj.enqueue(new MyObj(3, 4));
    expect(queueMyObj.toString()).toEqual('1|2,3|4');
  });
});
