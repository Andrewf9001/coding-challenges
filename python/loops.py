cars = ["Trueno", "Civic", "Supra", "Accord", "STI", "RX-7", "GTR", "SilEighty", "Silvia"]
def cars_in_lot(x):
  x.sort()

  for car in x:
    print(car)

cars_in_lot(cars)

cars_two = {
  "Trueno": 1986,
  "Civic": 1995,
  "Supra": 1998,
  "Accord": 1991,
  "Subaru": 1996,
  "RX-7": 1997,
  "GTR": 2004,
  "SilEighty": 1989,
  "Silvia": 1993,
  "Evolution": 2000
}

print(cars_two)

print(len(cars_two))
print(cars_two.items())

add_car = cars_two["MR2"] = 2001
print(cars_two)

update_car = cars_two["MR2"] = 2003
print(cars_two)

add_car_two = cars_two["Ford"] = 2017
print(cars_two)

del cars_two["Ford"]
print(cars_two)

print(len(cars_two))