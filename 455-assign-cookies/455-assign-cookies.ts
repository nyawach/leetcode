/*
 * @lc app=leetcode id=455 lang=typescript
 *
 * [455] Assign Cookies
 */

// [10,9,8,7]\n[5,6,7,8]

// @lc code=start
function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)
    let i = 0
    let j = 0
    while(i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            i++
        }
        j++
    }
    return i
}
// @lc code=end
