/*
 * @lc app=leetcode id=35 lang=golang
 *
 * [35] Search Insert Position
 */

package search_insert_position

// @lc code=start
func searchInsert(nums []int, target int) int {
	high := len(nums) - 1
	low := 0
	for low <= high {
		mid := (low + high) / 2
		if nums[mid] == target {
			return mid
		}
		if nums[mid] > target {
			high = mid - 1
		} else {
			low = mid + 1
		}
	}
	return low
}

// @lc code=end
