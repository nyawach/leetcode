/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
    let integer = 0
    while (true) {
        const next = integer + 1
        if (integer * integer <= x && x < next * next) {
            return integer
        }
        integer++
    }
};
// @lc code=end
