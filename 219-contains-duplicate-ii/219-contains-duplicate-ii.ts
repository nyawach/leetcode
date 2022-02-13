/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// [1,2,3,1,2,3]\n2
// [1,0,1,1]\n1
// [99,99]\n2

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const set = new Set<number>()
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (i > k) set.delete(nums[i-k-1])
        if (set.has(n)) return true
        set.add(n)
    }
    return false
}
// @lc code=end
