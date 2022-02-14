/*
 * @lc app=leetcode id=232 lang=typescript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start
class MyQueue {

    private arr: number[] = []

    constructor() {}

    push(x: number): void {
        this.arr.push(x)
    }

    pop(): number {
        return this.arr.shift()
    }

    peek(): number {
        return this.arr[0]
    }

    empty(): boolean {
        return !this.arr.length
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

