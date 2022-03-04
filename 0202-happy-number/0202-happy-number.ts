/*
 * @lc app=leetcode id=202 lang=typescript
 *
 * [202] Happy Number
 */

// @lc code=start
const sum = (n: number) => {
    let result = 0
    while(n > 0) {
        const digit = n % 10
        n = (n - digit) / 10
        result += digit ** 2
    }
    return result
}
function isHappy(n: number): boolean {
    let one = n
    let two = n
    one = sum(one)
    two = sum(two)
    two = sum(two)
    while (one != two) {
        one = sum(one)
        two = sum(two)
        two = sum(two)    
    }
    return one === 1
}
// @lc code=end

