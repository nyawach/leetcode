/*
 * @lc app=leetcode id=501 lang=typescript
 *
 * [501] Find Mode in Binary Search Tree
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
function findMode(root: TreeNode | null): number[] {
    const map = new Map<number, number>()
    const recursive = (node: TreeNode | null) => {
        if (node === null) return
        map.set(node.val, (map.get(node.val) || 0) + 1)       
        recursive(node.left)
        recursive(node.right)
    }
    recursive(root)
    const vMax = Math.max(...map.values())
    const result: number[] = []
    for (const [n, v] of map.entries()) {
        if (v === vMax) result.push(n)
    }
    return result
}
// @lc code=end
