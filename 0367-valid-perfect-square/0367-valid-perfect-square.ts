/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
    let root = 1
    while(root ** 2 < num) {
        root++
    }
    return root ** 2 === num
}
// @lc code=end
