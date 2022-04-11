/*
 * @lc app=leetcode id=496 lang=typescript
 *
 * [496] Next Greater Element I
 */

// [2,4]\n[1,2,3,4]

// @lc code=start
function nextGreaterElement(
    nums1: number[],
    nums2: number[]
): number[] {
    const map = new Map<number, number>()
    const stack: number[] = []
    for (let i = 0; i < nums2.length; i++) {
        const n = nums2[i]
        while (stack.length > 0 && stack[stack.length - 1] < n) {
            map.set(stack.pop(), n)
        }
        stack.push(n)
    }
    const result: number[] = []
    for (let i = 0; i < nums1.length; i++) {
        const n = nums1[i]
        result.push(map.get(n) || -1)
    }
    return result
}
// @lc code=end
