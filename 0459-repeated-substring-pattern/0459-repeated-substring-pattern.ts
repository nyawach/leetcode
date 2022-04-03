/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// ""abcabca""

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
    let i = 0
    let repeat = ''
    while(i < s.length) {
        const c = s[i]
        repeat += c
        const split = s.split(repeat)
        const splitLen = split.length
        const isEmptyAll = split.every(word => word === '')
        if (isEmptyAll && splitLen > 2) {
            return true
        }
        i++
    }
    return false
}
// @lc code=end
