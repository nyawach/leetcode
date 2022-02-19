/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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
// [1,2,3,null,4,5]
// [1,2,3,null,4,5,6,7,9,10]

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
const search = (
    node: TreeNode,
    path: string,
    answer: string[],
) => {
    if (!node.left && !node.right) {
        answer.push(`${path}${node.val}`)
    }
    if (node.left) {
        search(node.left, `${path}${node.val}->`, answer)
    }
    if (node.right) {
        search(node.right, `${path}${node.val}->`, answer)
    }
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = []
    if (!root) return ans
    search(root, '', ans)
    return ans
}
// @lc code=end
