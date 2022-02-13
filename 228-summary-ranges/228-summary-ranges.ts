/*
 * @lc app=leetcode id=228 lang=typescript
 *
 * [228] Summary Ranges
 */

// [0,2,3,4,6,8,9]

// @lc code=start
function summaryRanges(nums: number[]): string[] {
    if (!nums.length) return []
    let a = nums[0]
    let count = 0
    const out: string[] = []
    for (let i = 0; i < nums.length; i++) {
        const b = nums[i]
        const next = nums[i+1]
        if (next === b + 1) {
            count++
            continue
        }
        out.push(a === b ? `${a}` : `${a}->${b}`)
        a = next
    }
    return out
}
// @lc code=end
