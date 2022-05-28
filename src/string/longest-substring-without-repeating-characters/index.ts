export function getLongestSubstringWithoutRepeating(value: string): number {
  let result = 0;

  for (let firstPoint = 0; firstPoint < value.length; firstPoint++) {
    const hashTable = {};
    let secondPointer = firstPoint;

    hashTable[value[firstPoint]] = true;
    
    while (true) {
      secondPointer++;

      if (secondPointer === value.length) {
        result = Math.max(Object.keys(hashTable).length, result);
        break;
      }

      hashTable[value[secondPointer]] = true;
    }

  }

  return result;
}
