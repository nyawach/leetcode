/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// ""2-5g-3-J"\n2"
// ""--a-a-a-a--"\n2"

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
    let result = ''
    let wordCount = 0
    for(let i = s.length - 1; i >= 0; i--) {
        const c = s[i].toUpperCase()
        if (c === '-') continue
        if (wordCount === k) {
            wordCount = 0
            result = `-${result}`
        }
        wordCount++
        result = `${c}${result}`
    }
    return result
}
// @lc code=end
