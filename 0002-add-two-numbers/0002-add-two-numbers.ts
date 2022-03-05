/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// [2,4,3]\n[5,6,4]
// [0]\n[0]
// [9,9,9,9,9,9,9]\n[9,9,9,9]

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const root = new ListNode()
    let cursor = root
    let incremented = 0
    while(l1 || l2) {
        const sum = ((l1?.val ?? 0) + (l2?.val ?? 0))
        const nextVal = (sum + incremented)
        cursor.val = nextVal % 10
        incremented = nextVal >= 10 ? 1 : 0
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
        if (!l1 && !l2) break
        cursor.next = new ListNode()
        cursor = cursor.next
    }
    if (incremented) {
        cursor.next = new ListNode(incremented)
    }
    return root
}
// @lc code=end
