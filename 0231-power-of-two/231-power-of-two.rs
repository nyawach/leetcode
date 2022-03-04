/*
 * @lc app=leetcode id=231 lang=rust
 *
 * [231] Power of Two
 */

fn main() {}

struct Solution {}

// @lc code=start
impl Solution {
    pub fn is_power_of_two(mut n: i32) -> bool {
        if n <= 0 {
            return false
        }
        while n > 0 {
            if n == 1 {
                return true
            }
            if n % 2 == 1 {
                return false
            }
            n = n / 2
        }
        return false    
    }
}
// @lc code=end
