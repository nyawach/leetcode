/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// [0]\n1\n[]\n0
// [1]\n1\n[]\n0
// [0]\n0\n[1]\n1
// [1,2,3,9,9,0,0,0]\n5\n[2,4,6]\n3

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i1 = 0
    let i2 = 0
    let len = m + n
    let i = 0
    let temp = 0
    while(i < len) {
        const n1 = temp ? temp : nums1[i1] ?? 0
        const n2 = nums2[i2] ?? 0
        if (!n1) {
            nums1[i1] = n2
            i1++
            i2++
        } else if (!n2) {
            nums1[i1] = n1
            i1++
        } else if (n1 <= n2) {
            temp = 0
            nums1[i1] = n1
            i1++
        } else {
            temp = n1
            nums1[i1] = n2
            i1++
            i2++
        }
        i++
    }
};
// @lc code=end

