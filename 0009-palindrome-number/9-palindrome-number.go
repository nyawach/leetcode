/*
 * @lc app=leetcode id=9 lang=golang
 *
 * [9] Palindrome Number
 */

package palindrome_number

import (
	"strconv"
)

// @lc code=start
func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	if x != 0 && x%10 == 0 {
		return false
	}

	// NOTE: strconv.Itoa(Int to aschii?)で数字→文字列にできる
	xs := strconv.Itoa(x)
	l := len(xs)
	slice := make([]int, l)

	for i, s := range xs {
		slice[i] = int(s)
	}

	li := l - 1
	// NOTE: intの除算は切り捨て
	c := l / 2

	for i := 0; i < c; i++ {
		ri := li - i
		if slice[i] != slice[ri] {
			return false
		}
	}
	return true
}

// @lc code=end
