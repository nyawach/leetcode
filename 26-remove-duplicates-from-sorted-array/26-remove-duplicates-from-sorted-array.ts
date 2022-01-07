/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    const result = Array.from(new Set(nums))
    nums.splice(0, nums.length, ...result)
    return result.length
};
// @lc code=end
