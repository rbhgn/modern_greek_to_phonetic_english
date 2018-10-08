export const greekAlphabet = 
[
  {chars: ['α']                , default: {char: 'a' , vowel: true }},
  {chars: ['β']                , default: {char: 'v' , vowel: true }},
  {chars: ['ζ']                , default: {char: 'z' , vowel: true }},
  {chars: ['λ']                , default: {char: 'l' , vowel: true }},
  {chars: ['ξ']                , default: {char: 'x' , vowel: false}},
  {chars: ['ο', 'ω']           , default: {char: 'o' , vowel: true }},
  {chars: ['θ', 'δ']           , default: {char: 'th', vowel: true }},
  {chars: ['π']                , default: {char: 'p' , vowel: false}},
  {chars: ['τ']                , default: {char: 't' , vowel: false}},
  {chars: ['μ']                , default: {char: 'm' , vowel: true }},
  {chars: ['ν']                , default: {char: 'n' , vowel: true }},
  {chars: ['φ']                , default: {char: 'f' , vowel: false}},
  {chars: ['σ', 'ς']           , default: {char: 's' , vowel: false}},
  {chars: ['ει', 'η', 'ι', 'υ'], default: {char: 'ee', vowel: true } , EI: true},
  {chars: ['γγ']               , default: {char: 'ng', vowel: true }},
  {chars: ['ου']               , default: {char: 'ou', vowel: true }},
  {chars: ['αι', 'ε']          , default: {char: 'e' , vowel: true}  , endOfWord:   {char: 'ay', vowel: true } , EI: true},
  {chars: ['αυ']               , default: {char: 'af', vowel: true}  , beforeVowel: {char: 'av', vowel: true }},
  {chars: ['ευ']               , default: {char: 'ef', vowel: true}  , beforeVowel: {char: 'ev', vowel: true }},
  {chars: ['ντ']               , default: {char: 'nd', vowel: true}  , startOfWord: {char: 'd' , vowel: true }},
  {chars: ['μπ']               , default: {char: 'mb', vowel: true}  , startOfWord: {char: 'b' , vowel: true }},
  {chars: ['γ']                , default: {char: 'g' , vowel: false} , beforeEI:    {char: 'y' , vowel: false}},
  {chars: ['χ']                , default: {char: 'ch', vowel: false}},
  {chars: ['ρ']                , default: {char: 'r' , vowel: true }}
]














