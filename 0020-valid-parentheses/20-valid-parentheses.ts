/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
const isOpenBracket = (c: string) => /(\(|\[|\{)/.test(c)
function isValid(s: string): boolean {
    const chars = s.split('')
    const len = chars.length
    const stack = []
    for (let i = 0; i < len; i++) {
        const char = chars[i]
        if (isOpenBracket(char)) {
            stack.push(char)
            continue
        }
        switch (char) {
            case ')':
                if (stack.pop() !== '(') return false
                break
            case ']':
                if (stack.pop() !== '[') return false
                break
            case '}':
                if (stack.pop() !== '{') return false
                break
        }
    }
    return stack.length === 0
};
// @lc code=end
