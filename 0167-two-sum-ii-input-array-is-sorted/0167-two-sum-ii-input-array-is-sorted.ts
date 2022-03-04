/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
    let low = 0
    let high = numbers.length - 1
    while(numbers[low] + numbers[high] !== target) {
        if (numbers[low] + numbers[high] > target) {
            high--
        } else {
            low++
        }
    }
    return [low+1, high+1]
};
// @lc code=end
