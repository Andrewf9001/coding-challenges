// Playing with string functions
let str = "I'm a string";
let str2 = "Hi THeRe!";

function strFunctions(str, str2) {
  let lowerStr = str2.toLowerCase();
  let strConcat = str.concat(", " + lowerStr);

  let strSlice = strConcat.slice(14, 16);
  let strChar = strSlice.charAt(0).toUpperCase();
  let strChar2 = strSlice.charAt(1);

  let strConcat2 = strChar.concat(strChar2);

  console.log(strConcat);
  return strConcat2;
}

console.log(strFunctions(str, str2));

// Capitalize first letter of each word
const toCapital = (str) => {
  const words = str.split(" ");
  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
};

const shortStr = "Hi there";
console.log(toCapital(shortStr));

const longStr = "the quick brown fox jumped over the lazy dog";
console.log(toCapital(longStr));
