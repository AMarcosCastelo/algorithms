import { Stack } from "../../data-structure/stack/stack";

export function decimalToBinary (decimal: number) {
  const remStack = new Stack();
  let number = decimal;
  let rem;
  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += String(remStack.pop());
  }

  return binaryString;
}
