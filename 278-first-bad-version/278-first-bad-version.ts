/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = (
    isBadVersion: (version: number) => boolean
) => {
    return (n: number) => {
        let start = 1, end = n
        while (start < end) {
            const mid = Math.floor(start + (end-start) / 2)
            if (isBadVersion(mid)) end = mid
            else start = mid + 1
        }        
        return start
    }
}
// @lc code=end
