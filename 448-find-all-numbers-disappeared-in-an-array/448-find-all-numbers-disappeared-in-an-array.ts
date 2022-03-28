/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i])
        const index = num - 1
        nums[index] = Math.abs(nums[index]) * -1
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i+1)
    }
    return res
}
// @lc code=end
