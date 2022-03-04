/*
 * @lc app=leetcode id=191 lang=typescript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
function hammingWeight(n: number): number {
    let result = 0
    let count = 32
    while(count--) {
        if (n % 2) result++
        n = n >> 1
    }
    return result
}
// @lc code=end

