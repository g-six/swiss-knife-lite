export interface PasswordComplexityResults {
  has_lower: boolean
  has_number: boolean
  has_special: boolean
  has_upper: boolean
  is_long_enough: boolean
}

const isGoodPassword = (
  p: string,
  min_length: number,
): PasswordComplexityResults => {
  const results: PasswordComplexityResults = {
    has_lower: false,
    has_number: false,
    has_special: false,
    has_upper: false,
    is_long_enough: false,
  }

  if (p.length >= min_length) {
    results.is_long_enough = true
  }

  let cnt_upper = 0
  let cnt_lower = 0
  let cnt_number = 0
  let cnt_specials = 0

  for (let i = 0; i < p.length; i++) {
    if (
      results.has_upper &&
      results.has_lower &&
      results.has_number &&
      results.has_special
    ) {
      // Already satisfies everything
      // so no reason to continue
      return results
    }

    if (/[A-Z]/.test(p[i])) {
      cnt_upper > 0 ? (results.has_upper = true) : cnt_upper++
    } else if (/[a-z]/.test(p[i])) {
      cnt_lower > 0 ? (results.has_lower = true) : cnt_lower++
    } else if (/[0-9]/.test(p[i])) {
      cnt_number > 0 ? (results.has_number = true) : cnt_number++
    } else if (/[!|@|#|$|%|^|&|*|(|)|-|_]/.test(p[i])) {
      cnt_specials > 0 ? (results.has_special = true) : cnt_specials++
    }
  }

  return results
}

export default isGoodPassword
