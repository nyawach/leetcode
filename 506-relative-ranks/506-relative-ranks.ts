/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
    const map = new Map<number, number>()
    const sorted = [...score].sort((a, b) => b - a)
    sorted.forEach((n, i) => {
        map.set(n, i)
    })
    return score.map(n => {
        const rank = (map.get(n) || 0) + 1
        if (rank === 1) {
            return "Gold Medal"
        }
        if (rank === 2) {
            return "Silver Medal"
        }
        if (rank === 3) {
            return "Bronze Medal"
        }
        return rank.toString()
    })
};
// @lc code=end
