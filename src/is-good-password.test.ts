import { isGoodPassword } from './'

describe('Test isGoodPassword', () => {
  it('should pass if has at least one upper case, lower case, number and symbol', () => {
    const { has_lower, has_number, has_special, has_upper } = isGoodPassword(
      'tH1$',
      4,
    )
    expect(has_lower).toBeTruthy()
    expect(has_number).toBeTruthy()
    expect(has_special).toBeTruthy()
    expect(has_upper).toBeTruthy()
  })

  it('should fail if password does not have any lower case letters', () => {
    const { has_lower } = isGoodPassword('TH1$SHOULDFAIL', 8)
    expect(has_lower).toBeFalsy()
  })

  it('should fail if password does not have any upper case letters', () => {
    const { has_upper } = isGoodPassword('th1$shouldfail', 8)
    expect(has_upper).toBeFalsy()
  })

  it('should fail if password does not have any numbers', () => {
    const { has_number } = isGoodPassword('+Hi$ShouldF@!|', 8)
    expect(has_number).toBeFalsy()
  })

  it('should fail if not long enough', () => {
    const { is_long_enough } = isGoodPassword('+H1$Sh0uldF@!|', 80)
    expect(is_long_enough).toBeFalsy()
  })
})
