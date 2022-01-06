/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const sortRecursive = (l1: ListNode | null, l2: ListNode | null) => {
        if (!l1 && !l2)  return null
        if (!l1) return new ListNode(l2.val, l2.next)
        if (!l2) return new ListNode(l1.val, l1.next)
        const node = new ListNode()
        if (l1.val < l2.val) {
            node.val = l1.val
            node.next = sortRecursive(l1.next, l2)
        }
        else {
            node.val = l2.val
            node.next = sortRecursive(l1, l2.next)
        }
        return node
    }
    return sortRecursive(list1, list2)
};
// @lc code=end
