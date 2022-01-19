/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */

class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
// [1,2,3,null,null,4,5]\n[1,2,3]
   
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let cursorP = p
    let stackP: (TreeNode | null)[] = []
    let cursorQ = q
    let stackQ: (TreeNode | null)[] = []
    const isSame = (t1: TreeNode | null, t2: TreeNode | null) => {
        if (t1 == null && t2 == null) return true
        if (t1 == null || t2 == null) return false
        return t1.val === t2.val
    }
    while(cursorP || cursorQ || stackP.length || stackQ.length) {
        if (!isSame(cursorP, cursorQ)) return false
        if (cursorP === null && cursorQ == null) {
            cursorP = stackP.pop().right
            cursorQ = stackQ.pop().right
            continue
        }
        stackP.push(cursorP)
        stackQ.push(cursorQ)
        cursorP = cursorP.left
        cursorQ = cursorQ.left
    }
    return true
}
// @lc code=end
