"use strict";
const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  pork: 80,
  cheese: 60,
  tea: 20,
  candy: 25
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, products) {
  this.name = name;
  this.products = products;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;

  this.countTotalPrice = function(order) {
    for (let orderKey in order) {
      for (let productsKey in this.products) {
        if (orderKey === productsKey) {
          this.totalPrice += order[orderKey] * this.products[productsKey];
        }
      }
    }
  };

  this.getCustomerMoney = function() {
    do {
      this.customerMoney = prompt(
        `Введите сумму денег. Общая сумма покупок - ${this.totalPrice}`,
        0
      );

      if (this.customerMoney === null) {
        break;
      }
    } while (this.customerMoney < this.totalPrice || isNaN(this.customerMoney));
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
  };

  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };

  this.serve = function(order) {
    this.countTotalPrice(order);
    this.getCustomerMoney();
    this.countChange();

    if (this.customerMoney === null) {
      alert("Очень жаль, что-то пошло не так, приходите еще");
      this.reset();
    } else {
      alert(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
      this.reset();
    }
  };
}

const cashier = new Cashier("Mango", products);

cashier.serve(order);
