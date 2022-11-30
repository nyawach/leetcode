/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
    const base = 7
    const sign = num >= 0 ? '' : '-'
    let result = ''
    num = Math.abs(num)
    while (num >= base) {
        let d = num % base
        num = Math.floor(num / base)
        result = `${d}${result}`
    } 
    result = `${sign}${num}${result}`
    return result
}
// @lc code=end
