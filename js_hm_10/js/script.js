"use strict";

// const url = "https://test-users-api.herokuapp.com/users/ ";
// const urlws = "ws://api.myjson.com/bins/xtq3z";

// const xhr = new XMLHttpRequest();

// xhr.open("GET", url, true);
// xhr.send();

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
//     console.log( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
//   }




// -----------------




const getAllUsersUrl = "https://test-users-api.herokuapp.com/users/";
const getUserByIdUrl = "https://test-users-api.herokuapp.com/users/:id";
const greatNewUserUrl = "https://test-users-api.herokuapp.com/users/";
const editUserById = "https://test-users-api.herokuapp.com/users/:id";
const deleteUserById = "https://test-users-api.herokuapp.com/users/:id";

const getAllUsers = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", getAllUsersUrl, true);
  xhr.send();

  const stringyHTML = arr => {
    const string = `${arr.reduce((acc, item) => {
      return (
        acc +
        `<ul><li>${item.name}</li><li>${item.age}</li><li>${item.id}</li></ul>`
      );
    }, "")}`;

    const cont = document.querySelector(".container");

    cont.innerHTML = string;
  };

  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status > 299) {
      console.error(`${xhr.status}: ${xhr.statusText}`);
    } else {
      stringyHTML(JSON.parse(xhr.response).data);
    }
  });
};

getAllUsers();






