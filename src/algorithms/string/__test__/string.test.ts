import { getLongestSubstringWithoutRepeating } from "../longest-substring-without-repeating-characters";

describe('getLongestSubstringWithoutRepeating', () => {
  it('should return 3 when pass "abcabcbb"', () => {
    const result = getLongestSubstringWithoutRepeating('abcabcbb');

    expect(result).toBe(3);
  });

  it('should return 1 when pass "bbbbb"', () => {
    const result = getLongestSubstringWithoutRepeating('bbbbb');

    expect(result).toBe(1);
  });
});