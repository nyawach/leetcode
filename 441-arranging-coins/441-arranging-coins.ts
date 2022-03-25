/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
    let fillCount = 0
    let i = 0
    while (true) {
        i++
        fillCount += i
        if (fillCount === n) return i
        else if (fillCount > n) return i - 1
    }
}
// @lc code=end
