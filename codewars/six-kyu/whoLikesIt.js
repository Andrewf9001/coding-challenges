const likes = (names) => {
  const namesLength = names.length;

  if (namesLength === 0) return "no one likes this";
  else {
    if (namesLength === 1) return `${names[0]} likes this`;
    else if (namesLength === 2) return `${names[0]} and ${names[1]} like this`;
    else if (namesLength === 3)
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    else {
      const displayedNames = names.slice(0, 2);
      const extraUsers = names.length - displayedNames.length;

      return `${displayedNames[0]}, ${displayedNames[1]} and ${extraUsers} others like this`;
    }
  }
};
