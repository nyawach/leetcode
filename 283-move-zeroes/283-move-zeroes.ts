/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// [0,1,0,3,12]
// [0]

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let start = 0
    let end = nums.length - 1
    while(start < end) {
        if (nums[end] === 0) {
            end--
            continue
        }
        if (nums[start] === 0) {
            const zero = nums.splice(start, 1)
            nums.push(...zero)
            end--
        }
        else {
            start++
        }
    }
}
// @lc code=end
