/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
type LomanChar = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

const LomanRecord: Record<LomanChar, number> = <const>{
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
}

function romanToInt(s: string): number {
    const lomans = s.split('') as LomanChar[]
    const len = lomans.length
    let result = 0
    let temp = 0
    for (let i = 0; i < len; i++) {
        const current = LomanRecord[lomans[i]]
        const next: number | null = LomanRecord[lomans[i + 1]]
        if (next == null) {
            result += current
            continue
        }
        if (current >= next) {
            result += current
            continue
        }
        result += next - current
        i++
    }
    return result
};
// @lc code=end
