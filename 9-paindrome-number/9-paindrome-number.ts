// https://leetcode.com/problems/palindrome-number/

const isPalindrome = (x: number): boolean => {
    if (x < 0) return false
    if (x === 0 && x % 10 === 0) return false
    const all = x.toString().split('').map(str => Number.parseInt(str, 10))
    const maxIndex = all.length - 1
    return all.every((n, index) => n === all[maxIndex - index])
}
