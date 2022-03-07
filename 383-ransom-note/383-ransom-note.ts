/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// ""aaa"\n"aaaa""

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    if (ransomNote.length > magazine.length) return false
    const map = new Map<string, number>()
    for (let i = 0; i < magazine.length; i++) {
        const m = magazine[i]
        const mBase = map.has(m) ? map.get(m) : 0
        map.set(m, mBase + 1)
        const r = ransomNote[i]
        if (r) {
            const rBase = map.has(r) ? map.get(r) : 0
            map.set(r, rBase - 1)
        }
    }
    return Array.from(map.values()).every(v => v >= 0)
}
// @lc code=end
