/*
 * @lc app=leetcode id=387 lang=typescript
 *
 * [387] First Unique Character in a String
 */

// ""aabb""

// @lc code=start
function firstUniqChar(s: string): number {
    const map = new Map<string, number>()
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (!map.has(char)) map.set(char, 0)
        map.set(char, map.get(char) + 1)
    }
    const first = Array
        .from(map.entries())
        .filter(([_, count]) => count === 1)[0]
    return first ? s.indexOf(first[0]) : -1
}
// @lc code=end
