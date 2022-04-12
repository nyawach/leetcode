/*
 * @lc app=leetcode id=500 lang=typescript
 *
 * [500] Keyboard Row
 */

// @lc code=start
function findWords(words: string[]): string[] {
    return words.filter((w) =>
        /^[qwertyuiop]*$/i.test(w) ||
        /^[asdfghjkl]*$/i.test(w) ||
        /^[zxcvbnm]*$/i.test(w)
    )
}
// @lc code=end
