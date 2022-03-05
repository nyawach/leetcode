/*
 * @lc app=leetcode id=374 lang=typescript
 *
 * [374] Guess Number Higher or Lower
 */

// 4\n4
// 4\n3
// 4\n2
// 2\n2
// 2\n1
// 1\n1
// 1000\n50

const guess = (num: number) => (-1 | 1 | 0)
// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */
function guessNumber(n: number): number {
    let high = n
    let low = 0
    while(high >= low) {
        const mid = Math.floor((high + low) / 2)
        if (guess(mid) === -1) high = mid - 1
        if (guess(mid) === 1) low = mid + 1
        if (guess(mid) === 0) return mid
    }
}
// @lc code=end
