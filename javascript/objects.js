let cars = {
  Trueno: 1986,
  Civic: 1995,
  Supra: 1998,
  Accord: 1991,
  Subaru: 1996,
  "RX-7": 1997,
  GTR: 2004,
  SilEighty: 1989,
  Silvia: 1993,
  Evolution: 2000,
};

console.log(cars.Trueno);

cars["Mazda"] = { FC: 1986, FD: 1997 };

console.log(cars.Mazda);
console.log(cars);

delete cars["RX-7"];

console.log(cars);

let carSelection = [];

carSelection.push(cars["Trueno"]);

console.log(carSelection);
