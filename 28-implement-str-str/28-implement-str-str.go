/*
 * @lc app=leetcode id=28 lang=golang
 *
 * [28] Implement strStr()
 */

package implement_str_str

// @lc code=start
func strStr(haystack string, needle string) int {
	if needle == "" {
		return 0
	}
	hl := len(haystack)
	nl := len(needle)
	if hl < nl {
		return -1
	}
	for i := 0; i < hl; i++ {
		for j := 0; j < nl; j++ {
			if i+j > hl-1 {
				return -1
			}
			if haystack[i+j] != needle[j] {
				break
			}
			if j == nl-1 {
				return i
			}
		}
	}
	return -1
}

// @lc code=end
