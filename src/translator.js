import { greekAlphabet } from './greekAlphabet'



export const getAlphabetChars = (greekAlphabet) => {
  return greekAlphabet.map(a => a.chars).reduce((a, b) => a.concat(b))
}

export const getAlphabetDigraphs = (alphabet) => {
  return alphabet.map(a => a.chars).reduce((a, b) => a.concat(b)).filter(c => c.length > 1)
}

export const combineDigraphs = (input, alphabet) => {
  const digraphs = getAlphabetDigraphs(alphabet)
  const inputArray = input.split('')
  const result = inputArray.map((c, i, a) => {
    if (i > 0 && digraphs.includes(a[i - 1] + c)) return false
    if (i < a.length - 1 && digraphs.includes(c + a[i + 1])) return c + a[i + 1]
    return c
  })
  return result
}