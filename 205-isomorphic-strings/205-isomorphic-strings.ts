/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// ""paper"\n"title""
// ""foo"\n"bar""
// ""bbbaaaba"\n"aaabbbba""

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const record: Record<string, string> = {}
    for (let i = 0; i < s.length; i++) {
        const sc = s[i]
        const tc = t[i]
        const sKey = `s${sc}`
        const tKey = `t${tc}`
        if (!record[sKey]) record[sKey] = tc
        if (!record[tKey]) record[tKey] = sc
        if (!(tc === record[sKey] && sc === record[tKey])) return false
    }
    return true
}
// @lc code=end
