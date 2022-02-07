/*
 * @lc app=leetcode id=190 lang=typescript
 *
 * [190] Reverse Bits
 */

// @lc code=start
function reverseBits(n: number): number {
    let result = 0
    let count = 32
    while(count--) {
        result *= 2
        result += n & 1
        n = n >> 1
    }
    return result
}
// @lc code=end

