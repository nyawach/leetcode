/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// [0]\n1\n[]\n0
// [1]\n1\n[]\n0
// [0]\n0\n[1]\n1
// [1,2,3,9,9,0,0,0]\n5\n[2,4,6]\n3
// [-1,0,0,3,3,3,0,0,0]\n6\n[1,2,2]\n3
// [1,2,3,0,0,0]\n3\n[2,5,6]\n3

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i1 = 0
    let i2 = 0
    const result: number[] = []
    while (i1 < m && i2 < n) {
        const n1 = nums1[i1]
        const n2 = nums2[i2]
        if (n1 <= n2) {
            result.push(n1)
            i1++
        } else {
            result.push(n2)
            i2++
        }
    }
    while (i1 < m) {
        const n1 = nums1[i1]
        result.push(n1)
        i1++
    }
    while (i2 < n) {
        const n2 = nums2[i2]
        result.push(n2)
        i2++
    }
    nums1.splice(0, m+n, ...result)
};
// @lc code=end
