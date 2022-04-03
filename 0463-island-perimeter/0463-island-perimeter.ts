/*
 * @lc app=leetcode id=463 lang=typescript
 *
 * [463] Island Perimeter
 */

// @lc code=start
function islandPerimeter(grid: number[][]): number {
    let count = 0
    let dup = 0
    for (let i = 0; i < grid.length; i++) {        
        for (let j = 0; j < grid[i].length; j++) {
            const cell = grid[i][j]
            if (!cell) continue
            count++
            if (i > 0 && !!grid[i-1][j]) dup++
            if (j > 0 && !!grid[i][j-1]) dup++
        }
    }
    return count * 4 - dup * 2
}
// @lc code=end
