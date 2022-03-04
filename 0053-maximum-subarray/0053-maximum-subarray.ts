/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    const len = nums.length
    let maxSum = Number.NEGATIVE_INFINITY
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        maxSum = Math.max(sum, maxSum)
        if (sum < 0) sum = 0
    }
    return maxSum
}
// @lc code=end
