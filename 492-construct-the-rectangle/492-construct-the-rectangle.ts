/*
 * @lc app=leetcode id=492 lang=typescript
 *
 * [492] Construct the Rectangle
 */

// @lc code=start
function constructRectangle(area: number): number[] {
    let W = Math.floor(Math.sqrt(area))
    while (area % W !== 0) {
        W--
    }
    return [area / W, W]
}
// @lc code=end
