/*
 * @lc app=leetcode id=118 lang=typescript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
const generateRow = (nums: number[]) => {
    const result = [nums[0]]
    for (let i = 0; i < nums.length - 1; i++) {
        const n = nums[i] + nums[i + 1]
        result.push(n)
    }
    result.push(nums.slice(-1)[0])
    return result
}
function generate(numRows: number): number[][] {
    const result: number[][] = []
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            result[i] = [1]
            continue
        }
        if (i === 1) {
            result[i] = [1, 1]
            continue
        }
        const base = result[i - 1]
        result[i] = generateRow(base)
    }
    return result
}
// @lc code=end
