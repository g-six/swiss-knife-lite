import * as number_helper from './number-helper'

export const kebabCase = (input) => {
  return input.split(' ').join('-')
}

export const generateUri = (input) => {
  const lcase = input
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
  return kebabCase(lcase)
}

export const symbols = `<>@!#$%^&*()-+{};:?/|][`
export const generatePassword = (length = 8, add_symbols = false) => {
  const charset = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789${
    add_symbols ? symbols : ''
  }`
  let ret_val = ''

  for (let i = 0, n = charset.length; i < length; ++i) {
    ret_val += charset.charAt(Math.floor(Math.random() * n))
  }

  return ret_val
}

export const NumberHelper = number_helper
