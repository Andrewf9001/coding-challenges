const opposite = (number) => {
  if (number === 0) return number;
  else {
    if (number < 0) return Math.abs(number);
    else return -Math.abs(number);
  }
};
