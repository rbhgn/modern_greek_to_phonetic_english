import { greekAlphabet } from './greekAlphabet'



export const alphabetChars = (greekAlphabet) => {
  return greekAlphabet.map(a => a.chars).reduce((a, b) => a.concat(b))
}

export const alphabetDigraphs = (greekAlphabet) => {
  return greekAlphabet.map(a => a.chars).reduce((a, b) => a.concat(b)).filter(c => c.length > 1)
}