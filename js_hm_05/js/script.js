"use strict";
const initialUsers = [
  {
    id: "-s19a6hqce",
    login: "mangozedog@mail.com",
    password: "qwe123zv",
    isActive: true
  },
  {
    id: "-qkpzenjxe",
    login: "polysweet@skynet.ze",
    password: "123zxc78",
    isActive: true
  },
  {
    id: "-e51cpd4di",
    login: "ajax2k@change.ua",
    password: "ert234qw",
    isActive: false
  }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ]
};

const getId = () =>
  "-" +
  Math.random()
    .toString(36)
    .substr(2, 9);

const newUser = {
  id: getId(),
  login: "spesh@gmail.com",
  password: "11111111",
  isActive: true
};

const newPost = {
  id: getId(),
  text: "post #1",
  likes: 18
};

function SocialBook(users = [], posts = {}) {
  this.users = users;
  this.posts = posts;

  this.getAllUsers = function() {
    return this.users;
  };

  this.getUserByLogin = function(login) {
    return this.users.find(element => {
      if (element.login === login) {
        return element;
      }
    });
  };

  this.getUserStatus = function(userId) {
    this.users.forEach(el => {
      if (el.id === userId) {
        if (el.isActive) {
          console.log("active");
        } else {
          console.log("inactive");
        }
      }
    });
  };

  this.addUser = function(user) {
    this.users.push(user);
  };

  this.removeUserById = function(userId) {
    this.users = this.users.filter(el => el.id !== userId);
  };
  this.getUsersCount = function() {
    return this.users.length;
  };

  this.getUserPosts = function(userId) {
    return this.posts[userId];
  };

  this.addPost = function(userId, post) {
    this.posts[userId].push(post);
  };

  this.removePost = function(userId, postId) {
    this.posts[userId] = this.posts[userId].filter(el => el.id !== postId);
  };

  this.getAllLikes = function(userId) {
    return this.posts[userId].reduce((a, b) => a.likes + b.likes);
  };

  this.addPostLike = function(userId, postId) {
    this.posts[userId].forEach(el => {
      if (el.id === postId) {
        el.likes += 1;
      }
    });
  };

  this.getPostsCount = function(userId) {
    return this.posts[userId].length;
  };
}

const dataBase = new SocialBook(initialUsers, initialPosts);

console.log(dataBase.getPostsCount("-s19a6hqce"));
