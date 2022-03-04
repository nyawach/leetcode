/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    private nums: number[] = []
    private map = new Map<[number, number], number>()
    constructor(nums: number[]) {
        this.nums = nums
    }

    sumRange(left: number, right: number): number {
        const key: [number, number] = [left, right]
        if (this.map.has(key)) {
            return this.map.get(key)
        }
        const sum = this.nums.slice(left, right+1).reduce((acc, n) => acc + n, 0)
        this.map.set(key, sum)
        return sum
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
