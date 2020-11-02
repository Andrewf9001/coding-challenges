import time
import random

cars = {
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

# sales_man = [
#   f"Perfect, let me get the paper work for {}",
#   f"We have {} cars available today"
# ]

def hachiroku_dealership():
  time.sleep(1)
  print("\nWelcome to Hachiroku!\n")
  time.sleep(1)
  welcome()

def welcome():
  car_list = input("Would you like to see what we have available?")

hachiroku_dealership()