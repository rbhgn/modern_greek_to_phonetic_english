
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
  {chars: ['ει', 'η', 'ι', 'υ'], default: {char: 'ee', vowel: true }},
  {chars: ['γγ']               , default: {char: 'ng', vowel: true }},
  {chars: ['ου']               , default: {char: 'ou', vowel: true }},
  {chars: ['αι', 'ε']          , default: {char: 'e' , vowel: true}  , endOfWord:   {char: 'ay', vowel: true }},
  {chars: ['αυ']               , default: {char: 'af', vowel: true}  , beforeVowel: {char: 'av', vowel: true }},
  {chars: ['ευ']               , default: {char: 'ef', vowel: true}  , beforeVowel: {char: 'ev', vowel: true }},
  {chars: ['ντ']               , default: {char: 'nd', vowel: true}  , startOfWord: {char: 'd' , vowel: true }},
  {chars: ['μπ']               , default: {char: 'mb', vowel: true}  , startOfWord: {char: 'b' , vowel: true }},
  {chars: ['γ']                , default: {char: 'g' , vowel: false} , beforeEI:    {char: 'y' , vowel: true }},
  {chars: ['χ']                , default: {char: 'ch', vowel: false}},
  {chars: ['ρ']                , default: {char: 'r' , vowel: true }}
]

// α a in "spa"
// β v in "very"
// ζ z in "zoo"
// κ k in "kick"
// λ l in "lamb"
// ξ x in "vex"
// ο,ω o in "smoke"

// θ th in "thing"
// δ th in "the" or "this"

// π p in "pear" or "Peter"
// τ t in "tan"

// ψ ps in "lips"
// σ/ς s in "signal"


// μ m in "mother" or "mabel"
// ν n in "never" or "November"
// φ f in "friday" or "fun"

// ει ee in "bee" or e in "me"
// η ee in "bee" or e in "me"
// ι ee in "bee" or e in "me"
// υ ee in "bee" or e in "me"


// γγ ng in "finger" before κ, χ, ξ: nasal "ng" in "singer"

// ου ou in "soup" or oo in "shoot"

// ε e in "best" sometimes ay in "may"
// αι e in "best" at the end of a word: ay in "may"

// αυ before vowels and voiced consonants: "av" in "avatar" anywhere else: "af" in "affordable"
// ευ before vowels and voiced consonants: "ev" in "event" anywhere else: "ef" in "effort"

// ντ middle of words: "nd" in "hand" beginning of words: "d" in "dog" 
// μπ middle of words: "mb" in "dumb" beginning of words: "b" in "best" 

// γ guttural g (no English equivalent) before an "e" or "i" sound, pronounced as y in "yes"
// χ no English equivalent, rough, throaty sound similar to ch in "loch"
// ρ rolled r (no English equivalent - the sound is like the rolled r in the italian or Spanish language














