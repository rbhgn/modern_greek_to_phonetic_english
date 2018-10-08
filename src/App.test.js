import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { greekAlphabet } from './greekAlphabet'
import { alphabetChars, alphabetDigraphs } from './translator'




test('makeAlphabetCharacters', () =>{
  const value = alphabetChars(greekAlphabet)
  expect(value.length).toBe(31)
  expect(value.includes('γ')).toBe(true)
  expect(value.includes('a')).toBe(false)
})

test('makeAlphabetDigraphs', () =>{
  const value = alphabetDigraphs(greekAlphabet)
  expect(value.length).toBe(8)
  expect(value.includes('γγ')).toBe(true)
  expect(value.includes('γ')).toBe(false)
})