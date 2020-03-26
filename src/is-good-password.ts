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
    if (/[A-Z]/.test(p[i])) {
      cnt_upper++
      results.has_upper = cnt_upper > 0
    } else if (/[a-z]/.test(p[i])) {
      cnt_lower++
      results.has_lower = cnt_lower > 0
    } else if (/[0-9]/.test(p[i])) {
      cnt_number++
      results.has_number = cnt_number > 0
    } else if (/[!|@|#|$|%|^|&|*|(|)|-|_]/.test(p[i])) {
      cnt_specials++
      results.has_special = cnt_specials > 0
    }

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
  }

  return results
}

export default isGoodPassword
