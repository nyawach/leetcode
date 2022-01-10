/*
 * @lc app=leetcode id=35 lang=golang
 *
 * [35] Search Insert Position
 */

package search_insert_position

// @lc code=start
func searchInsert(nums []int, target int) int {
	i := 0
	for ; i < len(nums); i++ {
		if nums[i] >= target {
			return i
		}
	}
	return i
}

// @lc code=end
