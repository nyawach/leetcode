/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
    const chars = s.split('')
    const len = s.length
    let resultLen = 0
    for (let i = len - 1; i >= 0; i--) {
        const char = chars[i]
        if (char === ' ') {
            if (resultLen > 0) return resultLen
        } else {
            resultLen++
        }

    }
    return resultLen
};
// @lc code=end

