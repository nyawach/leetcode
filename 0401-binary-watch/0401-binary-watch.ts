/*
 * @lc app=leetcode id=401 lang=typescript
 *
 * [401] Binary Watch
 */

// @lc code=start
const readBinaryWatch = (num: number): string[] => {
    const times = []
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const hOnes = h ? h.toString(2).match(/1/g).length : 0
            const mOnes = m ? m.toString(2).match(/1/g).length : 0
            if (hOnes + mOnes === num) {
                times.push(`${h}:${m < 10 ? `0${m}` : m}`)
            }
        }
    }
    return times
}
// @lc code=end
