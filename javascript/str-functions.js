let str = "I'm a string";
let str2 = "Hi there!";

function strFunctions(str, str2) {
  let lowerStr = str2.toLowerCase();
  let strConcat = str.concat(", " + lowerStr);

  let strSlice = strConcat.slice(14, 16);
  let strChar = strSlice.charAt(0).toUpperCase();
  let strChar2 = strSlice.charAt(1);

  let strConcat2 = strChar.concat(strChar2);

  // return strConcat;
  return strConcat2;
}

console.log(strFunctions(str, str2));
