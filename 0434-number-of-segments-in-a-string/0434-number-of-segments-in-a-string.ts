/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// """"
// "" ""

// @lc code=start
function countSegments(s: string): number {
    return s.split(' ').filter(c => c).length
}
// @lc code=end
