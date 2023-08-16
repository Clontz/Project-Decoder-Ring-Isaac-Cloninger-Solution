// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    
    let doesRepeat = /(.).*\1/.test(alphabet);
    //returns false if any characters in alphabet repeat
    if (doesRepeat) return false; 
    
    if (!alphabet || alphabet.length > 26 || alphabet.length < 26) return false;
    //inputted alphabet to a library array
    const lib1 = alphabet.split(""); 
    //array of alphabet
    const lib2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    console.log(lib1);
    console.log(lib2);

    //compares two libraries and encodes one to the other
    function translate(libA, libB) {
      
      // this is where we will put the encoded/decoded message
      let result = "";
      let message = input.toLowerCase();
      
      //loop through the message
      for (let text = 0; text < message.length; text++) {
        
        let letter = message[text];
        console.log(`letter is ${letter}`);
        if (letter.match(/[^ ]/)) {
        //if the character is any character but a space

          let num = libA.indexOf(letter); //look up index of letter
          result += libB[num]; //add number with matching index to the code
        } else {
          result += letter; //character is a space, maintain spaces
        }
      }
      return result; //return code
    }

    if (encode) {
      //this block encodes a message
      let final = translate(lib2, lib1);
      return final;
    } else {
      //this block decodes a message
      let final = translate(lib1, lib2);
      return final;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
