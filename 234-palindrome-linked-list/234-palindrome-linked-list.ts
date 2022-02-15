/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

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

// [1,1,2,1]
function isPalindrome(head: ListNode | null): boolean {
    let slow = head
    let fast = head
    let temp: ListNode | null = null
    let prev: ListNode | null = null
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    prev = slow
    slow = slow.next
    prev.next = null
    while(slow) {
        temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    fast = head
    slow = prev
    while(slow) {
        if (fast.val !== slow.val) return false
        fast = fast.next
        slow = slow.next
    }
    return true
}
// @lc code=end
