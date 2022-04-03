/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// ""abababab""

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    let set = new Set()
    let left = 0
    let right = 0
    let longest = 0
    while(right < s.length){
        if(!set.has(s.charAt(right))){
            set.add(s.charAt(right))
            longest = Math.max(set.size, longest)
            right++
        } else {
            set.delete(s.charAt(left))
            left++
        }
    }
    return longest
}
// @lc code=end
