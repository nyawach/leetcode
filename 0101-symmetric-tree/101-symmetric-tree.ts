/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
 */
// [1,2,2,null,3,null,3]
// [2,3,3,4,5,null,4]

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

function isSymmetric(root: TreeNode | null): boolean {
    let cursorP = root.left
    let stackP: (TreeNode | null)[] = []
    let cursorQ = root.right
    let stackQ: (TreeNode | null)[] = []
    const isSame = (t1: TreeNode | null, t2: TreeNode | null) => {
        console.log(t1, t2)
        if (t1 == null && t2 == null) return true
        if (t1 == null || t2 == null) return false
        return t1.val === t2.val
    }
    while(cursorP || cursorQ || stackP.length || stackQ.length) {
        if (!isSame(cursorP, cursorQ)) return false
        if (cursorP === null && cursorQ == null) {
            cursorP = stackP.pop().left
            cursorQ = stackQ.pop().right
            continue
        }
        stackP.push(cursorP)
        stackQ.push(cursorQ)
        cursorP = cursorP.right
        cursorQ = cursorQ.left
    }
    return true
};
// @lc code=end

