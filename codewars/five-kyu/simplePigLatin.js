const pigIt = (str) => {
  let results = "";
  const splitStr = str.split(" ");

  const isAlphaNumeric = (str) => {
    return /^[a-zA-Z0-9]+$/.test(str);
  };

  splitStr.forEach((word, idx) => {
    if (!isAlphaNumeric(word)) results += word;
    else {
      const wordCount = splitStr.length;
      const firstLetter = word[0];
      const newWord = word.slice(1) + firstLetter + "ay";

      results += `${newWord}${idx + 1 !== wordCount ? " " : ""}`;
    }
  });

  return results;
};

// Instructions
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// Tests:
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
// Test.assertEquals(pigIt('This is my string'),'hisTay siay ymay tringsay')
// });
// });

// Submission
// function pigIt(str){
//     return str
//       .split(" ")
//       .map(word =>`${ word.substring(1)}${word.split('').shift()}${word.charCodeAt(0) > 63 ? 'ay' : '' }`)
//       .join(" ");
//    }
