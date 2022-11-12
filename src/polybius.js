// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  function polybius(input, encode = true) {
    // your solution code here
    const words = input.split(' ')
// set polybius square data in array of arrays, make sure i/j is all one string in 42
    const square = [
      ['a','b','c','d','e'],
      ['f','g','h','i/j','k'],
      ['l','m','n','o','p'],
      ['q','r','s','t','u'],
      ['v','w','x','y','z']
    ]
// Encryption goes below:
    if (encode){
      return words.map((word) => {
        return word.split('').map((letter) => {
          const row = square.indexOf(square.find((col) => col.some((colRow) => colRow.includes(letter.toLowerCase()))))+1
          const column = square[row-1].indexOf(square[row-1].find((colRow) => colRow.includes(letter.toLowerCase())))+1
          
          return column.toString() + row.toString()
        }).join('')
      }).join(' ')
    } else { // decode
      if (words.some((word) => word.length%2 === 1)) return false
       
      return words.map((word) => {
        const newWord = word.split('')
        const endWord = []

        while(newWord.length){
          endWord.push(newWord.splice(0,2))
        }
        
        return endWord.map((pair) => {
          if (pair === ['2','4']){
            return `\(i\/j\)`
          } else{
            return square[pair[1]-1][pair[0]-1]
          }
        }).join('')
      }).join(' ')
    }
  }
  return {
    polybius,
  };
})();
// it works!

module.exports = { polybius: polybiusModule.polybius };
