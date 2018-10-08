export const getAlphabetDigraphs = (alphabet) => {
  return alphabet.map(a => a.chars).reduce((a, b) => a.concat(b)).filter(c => c.length > 1)
}

export const combineDigraphs = (input, alphabet) => {
  let dup = []
  const digraphs = getAlphabetDigraphs(alphabet)
  const inputArray = input.split('')
  return inputArray.map((c, i, a) => {
    if (i > 0 && dup[i-1].length > 1 ) {
      dup.push(c)
      return false
    }
    if (i < a.length - 1 && digraphs.includes(c + a[i + 1])) {
      dup.push(c + a[i + 1])
      return c + a[i + 1]
    }
    dup.push(c)
    return c
  }).filter(c => c !== false)
}

export const getCharConditions = (char, alphabet) => {
  const alphabetObject = alphabet.filter(alphabetChar => alphabetChar.chars.includes(char))[0]
  if (!alphabetObject) return false
  return alphabetObject
}

export const translateInput = (input, alphabet) => {
  const combinedDigraphs = combineDigraphs(input, alphabet)
  const result = combinedDigraphs.map((inputChar, index, arr) => {
      const alphabetObject = getCharConditions(inputChar, alphabet)

      // not a greek character
      if (!alphabetObject) return inputChar

      // check if end of word
      if (
        alphabetObject.endOfWord && 
        getCharConditions(arr[index + 1], alphabet) === false
       ) {
        return alphabetObject.endOfWord.char
      }

      // check if start of word
      if (
        alphabetObject.startOfWord && 
        getCharConditions(arr[index - 1], alphabet) === false
       ) {
        return alphabetObject.startOfWord.char
      }

      // check if next char is vowel
      if (
        alphabetObject.beforeVowel && 
        getCharConditions(arr[index + 1], alphabet) &&
        getCharConditions(arr[index + 1], alphabet).default.vowel
       ) {
        return alphabetObject.beforeVowel.char
      }

      // check if next char is an 'E' or 'I' sound
      if (
        alphabetObject.beforeEI && 
        getCharConditions(arr[index + 1], alphabet) &&
        getCharConditions(arr[index + 1], alphabet).EI
        ) {
        return alphabetObject.beforeEI.char
      }

      // else default
      return alphabetObject.default.char
      })
    .join('')
  return result
}

