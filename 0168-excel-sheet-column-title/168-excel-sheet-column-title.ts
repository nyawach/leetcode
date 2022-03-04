/*
 * @lc app=leetcode id=168 lang=typescript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
const BASE_CHAR_CODE = 64
const A_TO_Z_NUM = 26

const convert2SheetId = (n: number) => {
    return String.fromCharCode(n + BASE_CHAR_CODE)
}

function convertToTitle(n: number): string {
    if (n == 0) return null
    let sheetName = ''
    while (n > 0) {
        let r = n % A_TO_Z_NUM
        let d = (n - r) / A_TO_Z_NUM
        if (r == 0) {
            r = 26
            d--
        }
        sheetName += convert2SheetId(r)
        n = d
    }
    return sheetName.split('').reverse().join('')
}
// @lc code=end
