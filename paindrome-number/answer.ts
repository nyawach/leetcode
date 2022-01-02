// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x: number): boolean => {
    if (x < 0) return false
    const half = Math.floor(x / 2)
    const all = x.toString().split('').map(str => Number.parseInt(str, 10))
    const maxIndex = all.length - 1
    return all.every((n, index) => n === all[maxIndex - index])
}
