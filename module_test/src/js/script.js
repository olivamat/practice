"use strict";

let globalVar = {};

(function(gv) {
  gv.sayHello = () => console.log("hello");
})(globalVar);

globalVar.sayHello();
// Hello
