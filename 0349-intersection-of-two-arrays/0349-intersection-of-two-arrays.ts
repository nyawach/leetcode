/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// [4,9,5]\n[9,4,9,8,4]

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
    const set1 = new Set(nums1)
    const result = new Set<number>()
    for (let i = 0; i < nums2.length; i++) {
        const n2 = nums2[i]
        if (set1.has(n2)) result.add(n2)
    }
    return Array.from(result.values())

}
// @lc code=end
