/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// [9,6,4,2,3,5,7,0,1]

// @lc code=start
function missingNumber(nums: number[]): number {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result += i - nums[i]
    }
    result += nums.length
    return result
}
// @lc code=end
