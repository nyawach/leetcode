/*
 * @lc app=leetcode id=350 lang=typescript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
    const map1 = new Map<number, number>()
    for (const n of nums1) {
        const count = map1.has(n) ? map1.get(n) + 1 : 1
        map1.set(n, count)
    }
    const result: number[] = []
    for (const n of nums2) {
        if (map1.get(n) > 0) {
            result.push(n)
            map1.set(n, map1.get(n) - 1)
        }
    }
    return result
}
// @lc code=end
