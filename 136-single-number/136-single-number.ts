/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */
// [4,1,2,1,2]

// @lc code=start
function singleNumber(nums: number[]): number {
    const hashmap = new Map<number, boolean>()
    while(nums.length) {
        const n = nums.shift()
        hashmap.set(n, hashmap.has(n))
    }
    for (let [n, b] of hashmap.entries()) {
        if (!b) return n
    }
    return 0
}
// @lc code=end
