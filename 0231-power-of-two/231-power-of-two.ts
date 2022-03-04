/*
 * @lc app=leetcode id=231 lang=typescript
 *
 * [231] Power of Two
 */

// @lc code=start
function isPowerOfTwo(n: number): boolean {
    if (n <= 0) return false
    while (n > 0) {
        if (n === 1) return true
        if (n % 2) return false
        n = n / 2
    }
    return false
}
// @lc code=end
