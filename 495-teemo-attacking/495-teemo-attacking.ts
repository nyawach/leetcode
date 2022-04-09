/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// [1,4]\n2
// [1,2,3,4,5,6]\n10
// [1,1]\n2
// [1,10000]\n100000

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (!timeSeries.length || duration === 0) return 0
    let begin = timeSeries[0]
    let total = 0
    for (const t of timeSeries) {
        total += (t < begin + duration ? t - begin : duration)
        begin = t
    }   
    return total + duration
}
// @lc code=end
