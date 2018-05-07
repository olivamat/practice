"use strict";

class Hamburger {
  constructor(size = false, stuffing = []) {
    this.size = size;
    this.stuffing = stuffing;
  }

  addTopping(topping) {
    if (this.stuffing.includes(topping.type)) {
      return;
    } else {
      this.stuffing.push(topping);
    }
  }
}

Hamburger.SIZE_SMALL = "SIZE_SMALL";
Hamburger.SIZE_LARGE = "SIZE_LARGE";
Hamburger.STUFFING_CHEESE = {
  type: "STUFFING_CHEESE",
  price: 15,
  calories: 20
};
Hamburger.STUFFING_SALAD = {
  type: "STUFFING_SALAD",
  price: 20,
  calories: 5
};
Hamburger.STUFFING_MEAT = {
  type: "STUFFING_MEAT",
  price: 35,
  calories: 15
};
Hamburger.TOPPING_SPICE = {
  type: "TOPPING_SPICE",
  price: 10,
  calories: 0
};
Hamburger.SIZE_LARGE = {
  type: "TOPPING_SAUCE",
  price: 15,
  calories: 5
};

let hamb = new Hamburger(Hamburger.SIZE_SMALL, [
  Hamburger.STUFFING_CHEESE,
  Hamburger.STUFFING_SALAD
]);

hamb.addTopping(Hamburger.TOPPING_SPICE);

console.log(hamb);
