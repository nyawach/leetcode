/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const chars = s.split('')
    const len = chars.length
    const mid = Math.ceil(chars.length / 2)
    for (let i = 0; i < mid; i++) {
        const start = chars[i]
        const end = chars[len - 1 - i]
        if (start !== end) return false
    }
    return true
}
// @lc code=end
