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

  removeTopping(topping) {
    return (this.stuffing = this.stuffing.filter(el => el !== topping));
  }

  getToppings() {
    return this.stuffing.filter(el => {
      if (el.type === "TOPPING_SPICE") {
        return true;
      } else if (el.type === "TOPPING_SAUCE") {
        return true;
      } else {
        return false;
      }
    });
  }

  getSize() {
    return this.size;
  }

  getStuffing() {
    return this.stuffing.filter(el => {
      if (el.type === "STUFFING_CHEESE") {
        return true;
      } else if (el.type === "STUFFING_SALAD") {
        return true;
      } else if (el.type === "STUFFING_MEAT") {
        return true;
      } else {
        return false;
      }
    });
  }

  calculatePrice() {
    console.log(this.stuffing);

    return this.stuffing.reduce((a, b) => {
      console.log(a.price);
      console.log(b.price);
      console.log(a.price + b.price);
      

      return a.price + b.price;
    }, 0);
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
Hamburger.TOPPING_SAUCE = {
  type: "TOPPING_SAUCE",
  price: 15,
  calories: 5
};

let hamb = new Hamburger(Hamburger.SIZE_SMALL, [
  Hamburger.STUFFING_CHEESE,
  Hamburger.STUFFING_SALAD
]);

hamb.addTopping(Hamburger.TOPPING_SPICE);
hamb.addTopping(Hamburger.TOPPING_SAUCE);

console.log(hamb.calculatePrice());
