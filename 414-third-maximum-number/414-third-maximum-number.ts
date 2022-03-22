/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// [1]
// [-1, 0, 1]


// @lc code=start
function thirdMax(nums: number[]): number {
    const ninf = Number.NEGATIVE_INFINITY
    let maxArray = [ninf, ninf, ninf]
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i]
        if (maxArray.includes(n)) continue
        if (n > maxArray[0]) {
            maxArray = [n, maxArray[0], maxArray[1]]
        }
        else if (n > maxArray[1]) {
            maxArray = [maxArray[0], n, maxArray[1]]
        }
        else if (n > maxArray[2]) {
            maxArray = [maxArray[0], maxArray[1], n]
        }
    }
    return maxArray.includes(ninf) ? Math.max(...maxArray) : maxArray[2]
}
// @lc code=end
