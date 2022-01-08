/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let i = 0
    let setter = new Set()
    const len = nums.length
    for (let j = 0; j < len; j++) {
        const n = nums[j]
        if (!setter.has(n)) {
            setter.add(n)
            nums[i] = n
            i++
        }
    }
    return i
};
// @lc code=end
