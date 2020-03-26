import kebabCase from './kebab-case'

export const generateUri = (input: string): string => {
  const lcase = input
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-')
  return kebabCase(lcase)
}

export default generateUri
