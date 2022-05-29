import { twoSum, twoSum2 } from "..";

describe('Two sums o(n)', () => {
  it('should return a empty array if no numbers are found', () => {
    const result = twoSum([1, 2, 3], 7);

    expect(result).toEqual([]);
  });

  it('should return the array of the two numbers that sum to the target', () => {
    const result = twoSum([1, 2, 3], 4);
    
    expect(result).toEqual([1, 3]);
  });

  it('should return the array of the two numbers that sum to the target', () => {
    const result = twoSum([1, 2, 3], 5);
    
    expect(result).toEqual([2, 3]);
  })
});

describe('Two sums o(n log(n))', () => {
  it('should return a empty array if no numbers are found', () => {
    const result = twoSum2([1, 2, 3], 7);

    expect(result).toEqual([]);
  });

  it('should return the array of the two numbers that sum to the target', () => {
    const result = twoSum2([1, 2, 3], 4);
    
    expect(result).toEqual([1, 3]);
  });

  it('should return the array of the two numbers that sum to the target', () => {
    const result = twoSum2([6, 8, -4, 1, 2, 3], 5);
    
    expect(result).toEqual([2, 3]);
  })
});