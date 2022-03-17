/*
 * @lc app=leetcode id=412 lang=typescript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
function fizzBuzz(n: number): string[] {
    const result: string[] = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz')
            continue
        }
        if (i % 5 === 0) {
            result.push('Buzz')
            continue
        }
        if (i % 3 === 0) {
            result.push('Fizz')
            continue
        }
        result.push(`${i}`)
    }
    return result
}
// @lc code=end