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
