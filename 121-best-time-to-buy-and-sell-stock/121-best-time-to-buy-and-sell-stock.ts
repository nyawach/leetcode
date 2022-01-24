/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min)
        max = Math.max(max, prices[i] - min)
    }
    return max
}
// @lc code=end
