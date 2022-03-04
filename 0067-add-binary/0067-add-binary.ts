/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    let i = 0
    const al = a.split('')
    const bl = b.split('')
    const maxLen = Math.max(a.length, b.length)
    let output = ''
    let shouldIncrement = false
    const add = (ai: string, bi: string) => {
        switch(ai + bi) {
            case '00':
                output = (shouldIncrement ? '1': '0') + output
                shouldIncrement = false
                break
            case '01':
            case '10':
                output = (shouldIncrement ? '0': '1') + output
                break
            case '11': 
                output = (shouldIncrement ? '1': '0') + output
                shouldIncrement = true
                break
        }
    }
    for (let i = 0; i < maxLen; i++) {
        const ai = al.pop() || '0'
        const bi = bl.pop() || '0'
        add(ai, bi)
        if (i !== maxLen - 1) continue
        output = (shouldIncrement ? '1': '') + output
    }
    return output
};
// @lc code=end

