// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    input = input.toLowerCase()
// ignores capital letters by getting rid of them
    let originalAlphabet = "abcdefghijklmnopqrstuvwxyz".split('')
// breaks original alphabet into individual letter strings
    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false
    }
// deals with what instructions said should return false
    if (!encode) shift = -shift

    let result = ""

    for (const letter in input) {
      const currentLetter = input[letter]
      const index = originalAlphabet.indexOf(currentLetter)
      originalAlphabet.includes(currentLetter) ? 
        shift > 0 ? 
          result += originalAlphabet[(index + shift) % originalAlphabet.length] : 
          result += originalAlphabet[(index % originalAlphabet.length + originalAlphabet.length + shift) % originalAlphabet.length] : 
        result += currentLetter
    }

    return result
}
// it works for both encoding and decoding!

return {
  caesar,
};
})();

module.exports = { caesar: caesarModule.caesar };
