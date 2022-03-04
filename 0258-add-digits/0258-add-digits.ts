/*
 * @lc app=leetcode id=258 lang=typescript
 *
 * [258] Add Digits
 */

// @lc code=start
function addDigits(num: number): number {
    let result = 0
    while(num >= 10) {
        const d = num % 10
        result += d
        num = (num - d) / 10
    }
    result += num
    if (result >= 10) return addDigits(result)
    else return result
}
// @lc code=end
