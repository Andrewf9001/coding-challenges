const generateHashtag = (str) => {
  const trimmedStr = str.trim();

  if (!trimmedStr) return false;
  else {
    let results = "#";
    const splitStr = str.split(" ");

    splitStr.forEach((word) => {
      if (word.length === 1) return (results += word.toUpperCase());
      else {
        const firstLetter = word.charAt(0).toUpperCase();
        const slicedWord = word.slice(1);
        const joinedWord = firstLetter + slicedWord;

        return (results += joinedWord);
      }
    });

    if (results.length > 140) return false;
    else return results;
  }
};

// Instructions
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false
