/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let major = nums[0]
    let count = 0
    nums.forEach(n => {
        if (count === 0) {
            count++
            major = n
        } else if (major === n) {
            count++
        } else {
            count--
        }
    })
    return major
}
// @lc code=end
