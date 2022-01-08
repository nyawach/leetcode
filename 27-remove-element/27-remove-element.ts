/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const len = nums.length
    let i = 0
    for (let ni = 0; ni < len; ni++) {
        const n  = nums[ni]
        if (n !== val) {
            nums[i] = n
            i++
        }
    }
    return i
};
// @lc code=end

