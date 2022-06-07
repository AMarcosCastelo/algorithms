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
});
