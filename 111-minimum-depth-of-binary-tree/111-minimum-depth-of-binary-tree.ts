/*
 * @lc app=leetcode id=111 lang=typescript
 *
 * [111] Minimum Depth of Binary Tree
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
// [3,9,20,null,null,15,7]
// [2,null,3,null,4,null,5,null,6]

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

function minDepth(root: TreeNode | null): number {
    if (root == null) return 0
    const dl = minDepth(root.left)
    const dr = minDepth(root.right)
    if (dl === 0) return dr + 1
    else if (dr === 0) return dl + 1
    else return Math.min(dl, dr) + 1
};
// @lc code=end
