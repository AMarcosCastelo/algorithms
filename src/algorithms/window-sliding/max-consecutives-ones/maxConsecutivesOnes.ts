export const getMaxConsecutiveOnes = (numbers: number[], k: number) => {
  let leftPoint = 0;

  for (let rightPoint = 0; rightPoint < numbers.length; rightPoint++) {
    k -= 1 - numbers[rightPoint];

    if (k < 0) {
      k += 1 - numbers[leftPoint];

      leftPoint++;
    }

    return rightPoint - leftPoint + 1;
  }
}