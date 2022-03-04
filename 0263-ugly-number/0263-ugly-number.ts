/*
 * @lc app=leetcode id=263 lang=typescript
 *
 * [263] Ugly Number
 */

// @lc code=start
function isUgly(n: number): boolean {
    if (n <= 0) return false
    while(n > 1) {
        if (n % 5 === 0) {
            n /= 5
            continue
        }
        if (n % 3 === 0) {
            n /= 3
            continue
        }
        if (n % 2 === 0) {
            n /= 2
            continue
        }
        return false
    }
    return true
}
// @lc code=end

