/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
    let max = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for(let j =  i+1; j < prices.length; j++) {
            const buy = prices[i]
            const sell = prices[j]
            const profit = sell - buy
            max = Math.max(profit, max)
        }
    }
    return max
}
// @lc code=end
