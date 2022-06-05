// O(n) with a hash table
export const twoSum = (nums: number[], target: number): number[] => {
  const hash: { [key: number]: boolean } = {};
  
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hash[complement]) {
      return [complement, nums[i]];
    }

    hash[nums[i]] = true;
  }
  

  return [];
}

// O(n log(n)) with two pointers
export const twoSum2 = (nums: number[], target: number): number[] => {
  const sortedNums = nums.sort();
  let rightPointer = sortedNums.length - 1;
  let leftPointer = 0;

  while(leftPointer < rightPointer) {
    const sum = sortedNums[leftPointer] + sortedNums[rightPointer];

    if (sum === target) {
      return [sortedNums[leftPointer], sortedNums[rightPointer]];
    } else if (sum < target) {
      leftPointer++;
    } else if (sum > target) {
      rightPointer--;
    }
  }

  return [];
}


