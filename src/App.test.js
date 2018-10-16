import { greekAlphabet } from './greekAlphabet'
import { getAlphabetDigraphs, combineDigraphs, translateInput, getCharConditions} from './translator'

test('getAlphabetDigraphs', () =>{
  const value = getAlphabetDigraphs(greekAlphabet)
  expect(value.length).toBe(8)
  expect(value.includes('γγ')).toBe(true)
  expect(value.includes('γ')).toBe(false)
})

test('getCombineDigraphs', () =>{
  expect(combineDigraphs('', greekAlphabet)).toMatchObject([])
  expect(combineDigraphs('αβ', greekAlphabet)).toMatchObject(['α', 'β'])
  expect(combineDigraphs('αμπχ', greekAlphabet)).toMatchObject(['α', 'μπ', 'χ'])
  expect(combineDigraphs('αυευ', greekAlphabet)).toMatchObject(['αυ', 'ευ'])
  expect(combineDigraphs('γγγ', greekAlphabet)).toMatchObject(['γγ', 'γ'])
})


test('translateInput', () => {
  expect(translateInput('',    greekAlphabet)).toBe('')
  expect(translateInput('α',   greekAlphabet)).toBe('a')
  expect(translateInput('οω',  greekAlphabet)).toBe('oo')
  expect(translateInput('γχ',  greekAlphabet)).toBe('gch')
  expect(translateInput('@',   greekAlphabet)).toBe('@')
  expect(translateInput('ε',   greekAlphabet)).toBe('ay')
  expect(translateInput('ε@',  greekAlphabet)).toBe('ay@')
  expect(translateInput('ε @', greekAlphabet)).toBe('ay @')
  expect(translateInput('εα',  greekAlphabet)).toBe('ea')
  expect(translateInput('εε',  greekAlphabet)).toBe('eay')
  expect(translateInput('ντ',  greekAlphabet)).toBe('d')
  expect(translateInput('μπμπ',greekAlphabet)).toBe('bmb')
  expect(translateInput('!μπ' ,greekAlphabet)).toBe('!b')
  expect(translateInput('αυξ' ,greekAlphabet)).toBe('afx')
  expect(translateInput('αυβ' ,greekAlphabet)).toBe('avv')
  expect(translateInput('αυα' ,greekAlphabet)).toBe('ava')
  expect(translateInput('αυαυ',greekAlphabet)).toBe('avaf')
  expect(translateInput('αυ'  ,greekAlphabet)).toBe('af')
  expect(translateInput('γα'  ,greekAlphabet)).toBe('ga')
  expect(translateInput('γ'   ,greekAlphabet)).toBe('g')
  expect(translateInput('γη'  ,greekAlphabet)).toBe('yee')
  expect(translateInput('ά'   ,greekAlphabet)).toBe('a')
  expect(translateInput('ά'   ,greekAlphabet)).toBe('a')
  expect(translateInput('ΐγγςώ',greekAlphabet)).toBe('eengso')

})

test('getCharConditions', () => {
  expect(getCharConditions('', greekAlphabet)).toBe(false)
  expect(getCharConditions('a', greekAlphabet)).toBe(false)
  expect(typeof getCharConditions('α', greekAlphabet)).toBe('object')
  expect(getCharConditions('α', greekAlphabet).default.char).toBe('a')
})
