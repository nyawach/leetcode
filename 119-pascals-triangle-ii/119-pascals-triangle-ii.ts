/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
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
function getRow(rowIndex: number): number[] {
    const result: number[][] = []
    for (let i = 0; i <= rowIndex; i++) {
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
    return result.slice(-1)[0]
}
// @lc code=end

