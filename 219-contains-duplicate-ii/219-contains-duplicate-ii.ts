/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// [1,2,3,1,2,3]\n2
// [1,0,1,1]\n1
// [99,99]\n2

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

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let i = 0
    let j = i + k
    while(nums[i] != null) {
        if (containsDuplicate(nums.slice(i, j+1))) return true
        i++
        j++
    }
    return false
}
// @lc code=end
