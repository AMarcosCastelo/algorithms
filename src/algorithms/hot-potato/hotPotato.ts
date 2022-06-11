import { Queue } from "../../data-structure/queue/queue";

export function hotPotato(elements: string[], num: number){
  const queue = new Queue<string>();
  const eliminatedList = [];

  for (let i = 0; i < elements.length; i++) {
    queue.enqueue(elements[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue()!);
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    winner: queue.dequeue(),
    eliminatedList,
  }
}
