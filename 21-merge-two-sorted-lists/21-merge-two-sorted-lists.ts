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

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     const sortRecursive = (l1: ListNode | null, l2: ListNode | null) => {
//         if (!l1 && !l2)  return null
//         if (!l1) return new ListNode(l2.val, l2.next)
//         if (!l2) return new ListNode(l1.val, l1.next)
//         const node = new ListNode()
//         if (l1.val < l2.val) {
//             node.val = l1.val
//             node.next = sortRecursive(l1.next, l2)
//         }
//         else {
//             node.val = l2.val
//             node.next = sortRecursive(l1, l2.next)
//         }
//         return node
//     }
//     return sortRecursive(list1, list2)
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const baseNode = new ListNode()
    let pointer = baseNode
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            pointer.next = new ListNode(list1.val)
            list1 = list1.next
        } else {
            pointer.next = new ListNode(list2.val)
            list2 = list2.next
        }
        pointer = pointer.next
    }
    pointer.next = list1 || list2
    return baseNode.next
};

// @lc code=end
