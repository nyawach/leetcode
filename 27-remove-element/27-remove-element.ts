/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const len = nums.length
    for (let i = 0; i < len; i++) {
        const n  = nums[i]
        if (n === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
};
// @lc code=end

