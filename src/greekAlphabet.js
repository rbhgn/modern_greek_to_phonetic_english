
export const greekAlphabet = 
[
  {chars: ['α']                , default: 'a' },
  {chars: ['β']                , default: 'v' },
  {chars: ['ζ']                , default: 'z' },
  {chars: ['λ']                , default: 'l' },
  {chars: ['ξ']                , default: 'x' },
  {chars: ['ο', 'ω']           , default: 'o' },
  {chars: ['θ', 'δ']           , default: 'th'},
  {chars: ['π']                , default: 'p' },
  {chars: ['τ']                , default: 't' },
  {chars: ['μ']                , default: 'm' },
  {chars: ['ν']                , default: 'n' },
  {chars: ['φ']                , default: 'f' },
  {chars: ['σ', 'ς']           , default: 's' },
  {chars: ['ει', 'η', 'ι', 'υ'], default: 'ee'},
  {chars: ['γγ']               , default: 'ng'},
  {chars: ['ου']               , default: 'ou'},
  {chars: ['αι', 'ε']          , default: 'e'  , endOfWord: 'ay'},
  {chars: ['αυ']               , default: 'af'                   , beforeVowel: 'av'},
  {chars: ['ευ']               , default: 'ef'                   , beforeVowel: 'ev'},
  {chars: ['ντ']               , default: 'nd'                                       , startOfWord: 'd'},
  {chars: ['μπ']               , default: 'mb'                                       , startOfWord: 'b'},
  {chars: ['γ']                , default: 'g'                                                           , beforeEI: 'y'},
  {chars: ['χ']                , default: 'ch'},
  {chars: ['ρ']                , default: 'r' }
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














