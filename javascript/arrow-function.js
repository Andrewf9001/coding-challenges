function Invoice(subTotal) {
  this.taxRate = 0.06;
  this.subTotal = subTotal;

  this.total = () => {
    console.log(this.taxRate * this.subTotal + this.subTotal);
  };
}

const inv = new Invoice(20);
inv.total();
