/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Implement strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    if (!needle) return 0
    for (let i = 0; i < haystack.length; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i+j] !== needle[j]) {
                break
            }
            if (j === needle.length - 1) return i
        }
    }
    return -1
};
// @lc code=end

