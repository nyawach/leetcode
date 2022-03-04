/*
 * @lc app=leetcode id=13 lang=golang
 *
 * [13] Roman to Integer
 */

package roman_to_integer

import "errors"

// const LomanRecord: Record<LomanChar, number> = <const>{
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
// }

// @lc code=start
func getRomanInteger(s string) (int, error) {
	var n int
	switch s {
	case "I":
		n = 1
	case "V":
		n = 5
	case "X":
		n = 10
	case "L":
		n = 50
	case "C":
		n = 100
	case "D":
		n = 500
	case "M":
		n = 1000
	default:
		return n, errors.New("No loman text.")
	}
	return n, nil
}

func romanToInt(s string) int {
	sl := make([]string, len(s))

	for i, c := range s {
		sl[i] = string(c)
	}

	li := len(sl) - 1

	var r = 0

	// NOTE: for文内でiを更新したいときはforループ
	// range sl だと別物になる
	for i := 0; i < len(sl); i++ {
		v, _ := getRomanInteger(sl[i])
		ni := i + 1

		if ni > li {
			r += v
			continue
		}

		ns := sl[ni]
		nv, _ := getRomanInteger(ns)

		if v >= nv {
			r += v
			continue
		}

		r += nv - v
		i++
	}

	return r
}

// @lc code=end
