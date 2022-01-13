/*
 * @lc app=leetcode id=66 lang=typescript
 *
 * [66] Plus One
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
    const result = []
    let shouldIncrement = true
    while (digits.length > 0) {
        const n = digits.pop()
        const added = shouldIncrement ? n + 1 : n
        const d = added % 10
        result.unshift(d)
        shouldIncrement = added >= 10
        if (shouldIncrement && digits.length === 0) {
            result.unshift(1)
        }
    }
    return result
};
// @lc code=end
