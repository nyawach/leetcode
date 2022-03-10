/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// ""abc"\n"ahbgdc""
// ""abc"\n"bahbgdc""
// ""axc"\n"ahbgdc""

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    let i = 0
    let j = 0
    while(j < t.length) {
        if (s[i] === t[j]) i++
        j++
    }
    return i === s.length
}
// @lc code=end
