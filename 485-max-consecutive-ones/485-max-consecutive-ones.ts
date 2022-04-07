/*
 * @lc app=leetcode id=485 lang=typescript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
    let count = 0
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (n === 0) {
            result = Math.max(result, count)
            count = 0
        } else {
            count++
        }
    }
    return Math.max(result, count)
}
// @lc code=end
