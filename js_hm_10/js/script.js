"use strict";

const getAllUsersUrl = "https://test-users-api.herokuapp.com/users/";
const btnShowAll = document.querySelector(".showAll");
const btnShowID = document.querySelector(".showID");
const btnAdd = document.querySelector(".add");
const btnEdit = document.querySelector(".edit");

const btnRemove = document.querySelector(".remove");

const inputID = document.querySelector(".id");
const inputName = document.querySelector(".name");
const inputAge = document.querySelector(".age");

const getAllUsers = () => {
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", getAllUsersUrl, true);
  // xhr.send();

  // const stringyHTML = arr => {
  //   const string = `${arr.reduce((acc, item) => {
  //     return (
  //       acc +
  //       `<ul><li>${item.name}</li><li>${item.age}</li><li>${item.id}</li></ul>`
  //     );
  //   }, "")}`;

  //   const cont = document.querySelector(".container");
  //   cont.innerHTML = string;
  // };

  // xhr.addEventListener("load", () => {
  //   if (xhr.status < 200 || xhr.status > 299) {
  //     console.error(`${xhr.status}: ${xhr.statusText}`);
  //   } else {
  //     stringyHTML(JSON.parse(xhr.response).data);
  //   }
  // });

  // xhr.addEventListener("error", function() {
  //   console.error(`${xhr.status}: ${xhr.responseText}`);
  // });

  fetch(getAllUsersUrl)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`Error while fetching: ${response.statusText}`);
    })
    .then(data => {
      const stringyHTML = arr => {
        const string = `${arr.reduce((acc, item) => {
          return (
            acc +
            `<ul><li>${item.name}</li><li>${item.age}</li><li>${
              item.id
            }</li></ul>`
          );
        }, "")}`;

        const cont = document.querySelector(".container");
        cont.innerHTML = string;
      };

      stringyHTML(data.data);
    });
};

const getUserById = id => {
  // const xhr = new XMLHttpRequest();
  // xhr.open("GET", `${getAllUsersUrl}${id}`, true);
  // xhr.send();

  // const stringyHTML = obj => {
  //   const string = `<ul><li>${obj.name}</li><li>${obj.age}</li><li>${
  //     obj.id
  //   }</li></ul>`;

  //   const cont = document.querySelector(".container");
  //   cont.innerHTML = string;
  // };

  // xhr.addEventListener("load", () => {
  //   if (xhr.status < 200 || xhr.status > 299) {
  //     console.error(`${xhr.status}: ${xhr.statusText}`);
  //   } else {
  //     stringyHTML(JSON.parse(xhr.response).data);
  //   }
  // });

  // xhr.addEventListener("error", function() {
  //   console.error(`${xhr.status}: ${xhr.responseText}`);
  // });

  fetch(`${getAllUsersUrl}${id}`)
    .then(response => {
      if (response.ok) return response.json();

      throw new Error(`PIZDEC ${response.responseText}`);
    })
    .then(data => {
      const stringyHTML = obj => {
        const string = `<ul><li>${obj.name}</li><li>${obj.age}</li><li>${
          obj.id
        }</li></ul>`;

        const cont = document.querySelector(".container");
        cont.innerHTML = string;
      };

      stringyHTML(data.data);
    });
};

const addUser = (name, age) => {
  // const xhr = new XMLHttpRequest();
  // xhr.open("POST", getAllUsersUrl, true);

  // xhr.setRequestHeader("Accept", "application/json");
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send(JSON.stringify({ name: name, age: age }));

  // xhr.addEventListener("load", () => {
  //   if (xhr.status < 200 || xhr.status > 299) {
  //     console.error(`${xhr.status}: ${xhr.statusText}`);
  //   } else {
  //     const data = JSON.parse(xhr.response).data;

  //     console.log(
  //       `Пользователь ${data.name} записан! Возраст ${data.age}, id - ${
  //         data._id
  //       }`
  //     );
  //   }
  // });

  // xhr.addEventListener("error", function() {
  //   console.error(`${xhr.status}: ${xhr.responseText}`);
  // });

  fetch(getAllUsersUrl, {
    method: "POST",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({ name: name, age: age })
  })
    .then(response => response.json())
    .then(obj =>
      console.log(
        `Пользователь ${obj.data.name} записан! Возраст ${obj.data.age}, id - ${
          obj.data._id
        }`
      )
    );
};

const removeUser = id => {
  // const xhr = new XMLHttpRequest();
  // xhr.open("DELETE", `${getAllUsersUrl}${id}`, true);
  // xhr.send();

  // xhr.addEventListener("load", () => {
  //   if (xhr.status < 200 || xhr.status > 299) {
  //     console.error(`${xhr.status}: ${xhr.statusText}`);
  //   } else {
  //     const data = JSON.parse(xhr.response).data;
  //     console.log(data);

  //     console.log(
  //       `Пользователь ${data.name} удален! Возраст ${data.age}, id - ${data.id}`
  //     );
  //   }
  // });

  // xhr.addEventListener("error", function() {
  //   console.error(`${xhr.status}: ${xhr.responseText}`);
  // });

  fetch(`${getAllUsersUrl}${id}`, {
    method: "DELETE"
  })
    .then(response => response.json())
    .then(obj =>
      console.log(
        `Пользователь ${obj.data.name} удален! Возраст ${obj.data.age}, id - ${
          obj.data._id
        }`
      )
    );
};

const updateUser = (id, user) => {
  // const xhr = new XMLHttpRequest();
  // xhr.open("PUT", `${getAllUsersUrl}${id}`, true);

  // xhr.setRequestHeader("Accept", "application/json");
  // xhr.setRequestHeader("Content-Type", "application/json");
  // xhr.send(JSON.stringify(user));

  // xhr.addEventListener("load", () => {
  //   if (xhr.status < 200 || xhr.status > 299) {
  //     console.error(`${xhr.status}: ${xhr.statusText}`);
  //   } else {
  //     const data = JSON.parse(xhr.response).data;
  //     console.log(data);

  //     console.log(
  //       `Пользователь ${data.name} успешно обновлен! Возраст ${
  //         data.age
  //       }, id - ${data.id}`
  //     );
  //   }
  // });

  // xhr.addEventListener("error", function() {
  //   console.error(`${xhr.status}: ${xhr.responseText}`);
  // });

  const request = new Request(`${getAllUsersUrl}${id}`, {
    method: "PUT",
    headers: new Headers({
      Accept: "application/json",
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(user)
  });

  fetch(request)
    .then(response => {
      if (response.ok) return response.json();
    })
    .then(obj =>
      console.log(
        `Пользователь ${obj.data.name} обновлен! Возраст ${obj.data.age}, id - ${
          obj.data._id
        }`
      )
    );
};

btnEdit.addEventListener("click", () =>
  updateUser(inputID.value, { name: inputName.value, age: inputAge.value })
);
btnRemove.addEventListener("click", () => removeUser(inputID.value));
btnAdd.addEventListener("click", () =>
  addUser(inputName.value, inputAge.value)
);
btnShowID.addEventListener("click", () => getUserById(inputID.value));
btnShowAll.addEventListener("click", getAllUsers);
