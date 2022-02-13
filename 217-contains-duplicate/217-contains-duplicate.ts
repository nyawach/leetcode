/*
 * @lc app=leetcode id=217 lang=typescript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, boolean>()
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (map.has(n)) return true
        map.set(n, true)
    }
    return false
}
// @lc code=end
