const numerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class RomanNumerals {
  static toRoman(num) {
    let results = "";
    const numsArray = Object.entries(numerals);

    for (let [key, value] of numsArray) {
      while (num >= value) {
        results += key;
        num -= value;
      }
    }

    return results;
  }

  static fromRoman(str) {
    let results = 0;
    const numeralSplit = str.split("");

    numeralSplit.forEach((char, index) => {
      const currentChar = numerals[char];
      const nextChar = numerals[numeralSplit[index + 1]];

      if (nextChar && currentChar < nextChar) {
        results += nextChar - currentChar;
        numeralSplit[index + 1] = "";
      } else if (currentChar !== undefined) {
        results += currentChar;
      }
    });

    return results;
  }
}
