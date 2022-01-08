/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const filtered = nums.filter(n => n !== val)
    nums.splice(0, nums.length, ...filtered)
    return filtered.length
};
// @lc code=end

