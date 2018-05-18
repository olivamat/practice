"use strict";

const url = "https://api.myjson.com/bins/xtq3z";
const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState !== 4) return;
  if (xhr.response !== 200) {
    console.error(`${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(JSON.parse(xhr.response));
  }
};

const button = document.getElementsByTagName("button");
button[0].addEventListener("click", () => console.log(xhr));




