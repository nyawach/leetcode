/*
 * @lc app=leetcode id=345 lang=typescript
 *
 * [345] Reverse Vowels of a String
 */
// ""apple""
// ""hello""

// @lc code=start
function reverseVowels(s: string): string {
    const chars = s.split('')
    const isVowel = (c: string) => /(a|e|i|o|u)/i.test(c)
    let start = 0
    let end = chars.length - 1
    while (start < end) {
        const cStart = chars[start]
        const cEnd = chars[end]
        if (!isVowel(cStart)) {
            start++
            continue
        }
        if (!isVowel(cEnd)) {
            end--
            continue
        }
        const temp = cStart
        chars[start] = cEnd
        chars[end] = temp
        start++
        end--
    }
    return chars.join('')
}
// @lc code=end
