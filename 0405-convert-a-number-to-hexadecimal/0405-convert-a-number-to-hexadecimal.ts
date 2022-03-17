/*
 * @lc app=leetcode id=405 lang=typescript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
const max = Math.pow(2, 32)
function toHex(num: number): string {
    if (num === 0) return '0'
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let result = ''
    if (num < 0) {
        num += max
    }
    while (num > 0) {
        const i = num % 16
        result = chars[i] + result
        num = Math.floor(num / 16)
    }
    return result
}
// @lc code=end
