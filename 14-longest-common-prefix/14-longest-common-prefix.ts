/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    const first = strs[0]
    const len = first.length
    let result = ''
    for (let i = 0; i < len; i++) {
        const char = first[i]
        if (strs.some(str => str.split('')[i] !== char)) break
        result += char
    }
    return result
};
// @lc code=end

