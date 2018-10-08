import { greekAlphabet } from './greekAlphabet'



export const getAlphabetChars = (alphabet) => {
  return alphabet.map(a => a.chars).reduce((a, b) => a.concat(b))
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

export const translateInput = (input, alphabet) => {
  const combinedDigraphs = combineDigraphs(input, alphabet)
  const result = combinedDigraphs.map((inputChar, index) => {
      const alphabetObject = getCharConditions(inputChar, alphabet)
      // not a greek character
      if (!alphabetObject) return inputChar

      // check if end of word
      if (alphabetObject.endOfWord && 
        index < combinedDigraphs.length && 
        getCharConditions(combinedDigraphs[index + 1], alphabet) === false) return alphabetObject.endOfWord

        
      return alphabetObject.default
      })
    .join('')
  return result
}

const getCharConditions = (char, alphabet) => {
  const alphabetObject = alphabet.filter(alphabetChar => alphabetChar.chars.includes(char))[0]
  if (!alphabetObject) return false
  return alphabetObject
}