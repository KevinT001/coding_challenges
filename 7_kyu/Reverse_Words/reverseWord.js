/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/


/*/* notes: take in string -> reverse order of each word but not the order of the words in the string"
split string into seperate arrays and reverse them. rejoin reversed arrays.
*/
function reverseWords(str) {
  // 1. take str param and split each word into an array.
  let wordsArray =str.split(' ')
  
  //2.take new array and map over it(causes nested array), splitting each element/word and reversing the order. Rejoin back in
  //into a string.  [ 'ehT', 'kciuq', 'nworb', 'xof', 'spmuj', 'revo', 'eht', 'yzal', '.god' ]
  let reversed = wordsArray.map(x => x.split('').reverse().join(''))
  
  //.join again to turn array back into a single string.
  let solved = reversed.join(' ')
  return solved
  console.log(solved)
}

/*
describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    assert.strictEqual(reverseWords('apple'), 'elppa');
    assert.strictEqual(reverseWords('a b c d'), 'a b c d');
    assert.strictEqual(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');
  });
});
*/