import { StackArray } from '../stack-array';
describe('StackArray', () => {
  let stack: StackArray<number>;

  beforeEach(() => {
    stack = new StackArray();
  });

  it('should starts empty', () => {
    expect(stack.size()).toEqual(0);
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should pushes elements', () => {
    Array.from({ length: 3 }).map((_, index) => {
      stack.push(index);
      expect(stack.size()).toEqual(index + 1);
    });
    expect(stack.isEmpty()).not.toBeTruthy();
  });

  it('should implements LIFO logic', () => {
    Array.from({ length: 3 }).map((_, index) => {
      const element = index + 1;
      stack.push(element);
    });

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
    expect(stack.pop()).toBeUndefined();
  });

  it('should allows to peek at the top element in he stack without popping it', () => {
    expect(stack.peek()).toEqual(undefined);

    stack.push(1);
    expect(stack.peek()).toEqual(1);

    stack.push(2);
    expect(stack.peek()).toEqual(2);

    stack.pop();
    expect(stack.peek()).toEqual(1);
  });

  it('should returns the correct size', () => {
    Array.from({ length: 4 }).map((_, index) => {
      expect(stack.size()).toEqual(index);
      stack.push(index);
    });
    expect(stack.size()).toEqual(4);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    Array.from({ length: 3 }).map((_, index) => {
      stack.push(index);
    });

    stack.pop();
    expect(stack.size()).toEqual(2);
    stack.pop();
    expect(stack.size()).toEqual(1);
    stack.pop();
    expect(stack.size()).toEqual(0);
    stack.pop();
    expect(stack.size()).toEqual(0);
  });

  it('should returns if it is empty', () => {
    Array.from({ length: 3 }).map((_, index) => {
      if (index === 0) {
        expect(stack.isEmpty()).toEqual(true);
        stack.push(1);
      }
      expect(stack.isEmpty()).toEqual(false);
      stack.push(index);
    });

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    Array.from({ length: 3 }).map((_, index) => {
      stack.push(index);
    });

    stack.pop();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(false);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('should clears the stack', () => {
    stack.clear();
    expect(stack.isEmpty()).toEqual(true);

    stack.push(1);
    stack.push(2);

    stack.clear();
    expect(stack.isEmpty()).toEqual(true);
  });

  it('returns an Array', () => {
    let stackArray = stack.toArray();
    expect(stackArray.length).toEqual(0);

    stack.push(1);
    stack.push(2);

    stackArray = stack.toArray();
    expect(stackArray.length).toEqual(2);

    let i = 1;
    stackArray.forEach(e => {
      expect(e).toEqual(i);
      i++;
    });
  });

  it('should returns toString primitive types', () => {
    expect(stack.toString()).toEqual('');

    stack.push(1);
    expect(stack.toString()).toEqual('1');

    stack.push(2);
    expect(stack.toString()).toEqual('1,2');

    stack.clear();
    expect(stack.toString()).toEqual('');

    const stackString = new StackArray<string>();
    stackString.push('el1');
    expect(stackString.toString()).toEqual('el1');

    stackString.push('el2');
    expect(stackString.toString()).toEqual('el1,el2');
  });

  it('returns toString objects', () => {

    class MyObj {
      constructor(public el1: any, public el2: any) { }
      toString() {
        return `${this.el1.toString()}|${this.el2.toString()}`;
      }
    }
    const stackMyObj = new StackArray<MyObj>();
    expect(stackMyObj.toString()).toEqual('');

    stackMyObj.push(new MyObj(1, 2));
    expect(stackMyObj.toString()).toEqual('1|2');

    stackMyObj.push(new MyObj(3, 4));
    expect(stackMyObj.toString()).toEqual('1|2,3|4');
  });
});
