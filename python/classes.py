class Cars:
  def __init__(self, model, make, year):
    self.model = model
    self.make = make
    self.year = year

  def carFormatter(self):
    return f'You have a {self.year} {self.make} {self.model}!'

honda = Cars('Accord', 'Honda', 1991)
nissan = Cars('Sentra', 'Nissan', 1998)
acura = Cars('Integra', 'Acura', 1996)
hyundai = Cars('Elantra', 'Hyundai', 2012)

print(honda.carFormatter())
print(hyundai.carFormatter())
print(acura.carFormatter())
print(nissan.carFormatter())