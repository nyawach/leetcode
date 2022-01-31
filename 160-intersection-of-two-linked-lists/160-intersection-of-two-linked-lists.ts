/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
// 8\n[4,1,8,4,5,6]\n[5,6,1,8,4,5,6]\n2\n3
   
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let cursorA = headA
    let cursorB = headB

    while (cursorA !== cursorB) {
        cursorA = cursorA ? cursorA.next : headA
        cursorB = cursorB ? cursorB.next : headB
    }
    return cursorA
};
// @lc code=end
