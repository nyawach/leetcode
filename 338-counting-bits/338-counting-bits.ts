/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
const bit = 2
function countBits(n: number): number[] {
    const result: number[] = []
    const countOne = (i: number) => {
        let count = 0
        while (i > 0) {
            if (i % bit === 1) count++
            i = i >> 1
        }
        return count
    }
    for (let i = 0; i <= n; i++) {
        result.push(countOne(i))
    }
    return result
}
// @lc code=end
