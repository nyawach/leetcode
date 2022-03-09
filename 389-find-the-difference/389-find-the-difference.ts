/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// """\n"y""

// @lc code=start
function findTheDifference(s: string, t: string): string {
    const map = new Map<string, number>()
    for (let i = 0; i < t.length; i++) {
        const charS = s[i]
        if (charS != null) {
            if (!map.has(charS)) map.set(charS, 0)
            map.set(charS, map.get(charS) + 1)
        }
        const charT = t[i]
        if (!map.has(charT)) map.set(charT, 0)
        map.set(charT, map.get(charT) - 1)
    }
    const first = Array
        .from(map.entries())
        .find(([_, count]) => count === -1)
    return first ? first[0] : s[0]
}
// @lc code=end
