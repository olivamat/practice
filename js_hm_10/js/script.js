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

  xhr.addEventListener("error", function() {
    console.error(`${xhr.status}: ${xhr.responseText}`);
  });
};

const getUserById = id => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${getAllUsersUrl}${id}`, true);
  xhr.send();

  const stringyHTML = obj => {
    const string = `<ul><li>${obj.name}</li><li>${obj.age}</li><li>${
      obj.id
    }</li></ul>`;

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

  xhr.addEventListener("error", function() {
    console.error(`${xhr.status}: ${xhr.responseText}`);
  });
};

const addUser = (name, age) => {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", getAllUsersUrl, true);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({ name: name, age: age }));

  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status > 299) {
      console.error(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const data = JSON.parse(xhr.response).data;

      console.log(
        `Пользователь ${data.name} записан! Возраст ${data.age}, id - ${
          data._id
        }`
      );
    }
  });

  xhr.addEventListener("error", function() {
    console.error(`${xhr.status}: ${xhr.responseText}`);
  });
};

const removeUser = id => {
  const xhr = new XMLHttpRequest();
  xhr.open("DELETE", `${getAllUsersUrl}${id}`, true);
  xhr.send();

  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status > 299) {
      console.error(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const data = JSON.parse(xhr.response).data;
      console.log(data);

      console.log(
        `Пользователь ${data.name} удален! Возраст ${data.age}, id - ${data.id}`
      );
    }
  });

  xhr.addEventListener("error", function() {
    console.error(`${xhr.status}: ${xhr.responseText}`);
  });
};

const updateUser = (id, user) => {
  const xhr = new XMLHttpRequest();
  xhr.open("PUT", `${getAllUsersUrl}${id}`, true);

  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(user));

  xhr.addEventListener("load", () => {
    if (xhr.status < 200 || xhr.status > 299) {
      console.error(`${xhr.status}: ${xhr.statusText}`);
    } else {
      const data = JSON.parse(xhr.response).data;
      console.log(data);

      console.log(
        `Пользователь ${data.name} успешно обновлен! Возраст ${
          data.age
        }, id - ${data.id}`
      );
    }
  });

  xhr.addEventListener("error", function() {
    console.error(`${xhr.status}: ${xhr.responseText}`);
  });
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
