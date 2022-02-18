/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// ""anagram"\n"nagaram""
// ""rat"\n"car""

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const charMap = new Map<string, number>()
    for (let i = 0; i < s.length; i++) {
        const sc = s[i]
        if (charMap.get(sc) == null) {
            charMap.set(sc, 0)
        }
        charMap.set(sc, charMap.get(sc) + 1)
        const tc = t[i]
        if (charMap.get(tc) == null) {
            charMap.set(tc, 0)
        }
        charMap.set(tc, charMap.get(tc) - 1)
    }
    return Array.from(charMap.values()).every(n => n === 0)
}
// @lc code=end
