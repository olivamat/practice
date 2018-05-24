"use strict";

const url = "https://api.myjson.com/bins/xtq3z";
const urlws = "ws://api.myjson.com/bins/xtq3z";

const xhr = new XMLHttpRequest();

xhr.open("GET", url, true);
xhr.send();

// xhr.onreadystatechange = function() {
//   if (xhr.readyState !== 4) return;
//   if (xhr.response !== 200) {
//     console.error(`${xhr.status}: ${xhr.statusText}`);
//   } else {
//     console.log(JSON.parse(xhr.response));
//   }
// };

// xhr.addEventListener("load", () => {
//   if (xhr.status < 200 || xhr.status > 299) {
//     console.error(`${xhr.status}: ${xhr.statusText}`);
//   } else {
//       console.log();
      
//     console.log(JSON.parse(xhr.response));
//   }
// });

// xhr.addEventListener('error', () => {
//     console.error(`${xhr.status}: ${xhr.statusText}`);
// });

// xhr.onprogress = function(event) {
//     console.log(event);
//     alert( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
//   }



// fetch("https://api.myjson.com/bins/xtq3z").then( response => {if (response.ok) return console.log(response);
// })


const ws = new WebSocket(urlws);



const button = document.getElementsByTagName("button");
button[0].addEventListener("click", () => console.log(ws));
