/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

const getDepth = (t: TreeNode | null) => {
    if (t == null) return 0
    return Math.max(getDepth(t.left), getDepth(t.right)) + 1
}
function isBalanced(root: TreeNode | null): boolean {
    if (root == null) return true
    const dl = getDepth(root.left)
    const dr = getDepth(root.right)
    return Math.abs(dl - dr) <= 1 && isBalanced(root.left) && isBalanced(root.right)
}
// @lc code=end

