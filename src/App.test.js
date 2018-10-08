import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { greekAlphabet } from './greekAlphabet'
import { getAlphabetChars, getAlphabetDigraphs, combineDigraphs, translateInput, getCharConditions} from './translator'



test('getAlphabetCharacters', () =>{
  const value = getAlphabetChars(greekAlphabet)
  expect(value.length).toBe(31)
  expect(value.includes('γ')).toBe(true)
  expect(value.includes('a')).toBe(false)
})

test('getAlphabetDigraphs', () =>{
  const value = getAlphabetDigraphs(greekAlphabet)
  expect(value.length).toBe(8)
  expect(value.includes('γγ')).toBe(true)
  expect(value.includes('γ')).toBe(false)
})

// test('getCombineDigraphs', () =>{
//   console.log(combineDigraphs('γγγ', greekAlphabet))
//   expect(combineDigraphs('', greekAlphabet)).toMatchObject([])
//   expect(combineDigraphs('αβ', greekAlphabet)).toMatchObject(['α', 'β'])
//   expect(combineDigraphs('αμπχ', greekAlphabet)).toMatchObject(['α', 'μπ', 'χ'])
//   expect(combineDigraphs('αυευ', greekAlphabet)).toMatchObject(['αυ', 'ευ'])
//   expect(combineDigraphs('γγγ', greekAlphabet)).toBe(['γγ', 'γ'])
// })


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
})

test('getCharConditions', () => {
  expect(getCharConditions('', greekAlphabet)).toBe(false)
  expect(getCharConditions('a', greekAlphabet)).toBe(false)
  expect(typeof getCharConditions('α', greekAlphabet)).toBe('object')
  expect(getCharConditions('α', greekAlphabet).default.char).toBe('a')
})
