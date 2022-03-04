/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    let one = 1
    let two = 1
    let temp = 0
    for (let _ = 0; _ < n - 1; _++) {
        temp = one
        one = one + two
        two = temp
    }
    return one
};
// @lc code=end

