export const symbols = `<>@!#$%^&*()-+{};:?/|][`
const generatePassword = (length = 8, add_symbols = false) => {
  const charset = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789${
    add_symbols ? symbols : ''
  }`
  let ret_val = ''

  for (let i = 0, n = charset.length; i < length; ++i) {
    ret_val += charset.charAt(Math.floor(Math.random() * n))
  }

  return ret_val
}

export default generatePassword
