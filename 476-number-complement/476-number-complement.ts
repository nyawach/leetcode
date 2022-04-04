/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
    let digit = 0
    let result = 0
    while(num > 0) {
        if (num % 2 === 0) {
            result += 2 ** digit
        }
        digit++
        num = num >> 1
    }
    return result
}
// @lc code=end
