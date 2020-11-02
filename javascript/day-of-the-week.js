dayOfWeek = () => {
  let day;
  switch (new Date().getDay()) {
    case 0:
      return day = "Sunday";
      break;
    case 1:
      return day = "Monday";
      break;
    case 2:
      return day = "Tuesday";
      break;
    case 3:
      return day = "Wednesday";
      break;
    case 4:
      return day = "Thursday";
      break;
    case 5:
      return day = "Friday";
      break;
    case  6:
      return day = "Saturday";
  }
}

console.log(dayOfWeek())



daysInMonth = () => {
  var year = 2016;
  var month = 6;
  var dayCount;
  switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
          return dayCount = 31;
          break;
      case 4:
      case 6:
      case 9:
      case 11:
          return dayCount = 30;
          break;
      case 2:
          if (((year % 4 == 0) && !(year % 100 == 0))
              || (year % 400 == 0))
              return dayCount = 29;
          else
              return dayCount = 28;
          break;
      default:
          return dayCount = -1; // invalid month
  }
}

console.log(daysInMonth());

console.log(2000 % 400)
// console.log(2000 % 100)
// console.log(2000 % 4)
console.log(1996 % 400)