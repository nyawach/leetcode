/*
 * @lc app=leetcode id=171 lang=typescript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
const getCharToNumber = (c: string) => c.charCodeAt(0) - 64
function titleToNumber(columnTitle: string): number {
    const chars = columnTitle.split('')
    let digit = 0
    let n = 0
    while(chars.length) {
        const c = chars.pop()
        const cn = getCharToNumber(c)
        n += cn * (26 ** digit)
        digit++
    }
    return n
};
// @lc code=end
