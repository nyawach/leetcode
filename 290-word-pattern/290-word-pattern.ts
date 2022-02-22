/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// ""abba"\n"dog cat cat fish""

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ')
    const patternChars = pattern.split('')
    if (words.length !== patternChars.length) {
        return false
    }
    if (new Set(words).size !== new Set(patternChars).size) {
        return false
    }

    const map = new Map<string, string>()

    for(let i = 0; i < pattern.length; i++) {
        if(map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) {
            return false
        }
        map.set(pattern[i], words[i])
    }

    return true
}
// @lc code=end
