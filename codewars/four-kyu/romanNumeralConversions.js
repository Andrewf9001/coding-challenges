class RomanNumerals {
  static toRoman(num) {
    let results = "";
    const numToString = num.toString();
    const numsArray = Object.entries(numerals);

    for (let [key, value] of numsArray) {
      if (num === 0) {
        break;
      }

      while (num >= value) {
        results += key;
        num -= value;
      }
    }

    return results;
  }
}
