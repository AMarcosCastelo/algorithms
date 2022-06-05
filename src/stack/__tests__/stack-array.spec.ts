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
});
