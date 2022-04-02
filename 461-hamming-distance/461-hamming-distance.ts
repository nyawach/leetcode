/*
 * @lc app=leetcode id=461 lang=typescript
 *
 * [461] Hamming Distance
 */

// 1\n4
// 0\n2
// 0\n1
// 3\n1
// 3\n0
// 24\n23190
// 0\n0

// @lc code=start
function hammingDistance(x: number, y: number): number {
    let d = 0
    while (x > 0 || y > 0) {
        if (x % 2 !== y % 2) {
            d++
        }
        x = x >> 1
        y = y >> 1
    }
    return d
}
// @lc code=end
