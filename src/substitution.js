// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    input = input.toLowerCase()      
    // ignores capital letters by getting rid of them
    anyRepeatsCheck = new Set(alphabet)
    // makes sure no repeated characters in Set created from input alphabet
    if (!alphabet || alphabet.length !== 26 || [...anyRepeatsCheck].length !== 26) {
      return false
    }
    const normalAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
// above here is good and passing error handling tests in Qualified
    let output = []
    if (encode) {
      for (let i = 0; i < 26; i++) {
        output[normalAlphabet[i]] = alphabet[i]
      }
    } else {
      for (let i = 0; i < 26; i++) {
        output[alphabet[i]] = normalAlphabet[i]
      }
    }
    let changedOutput = input.split("").map((letter) => {
      if (letter === " ") {
        return " "
      } else {
        return output[letter]
      }
    })
    return changedOutput.join("")  
  }  
// trying rest of this to see if it works
// it works in Qualified!!!
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
