"use strict";

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const wrapper = document.getElementsByClassName("wrapper");

const createPostCard = (urlImg, postTitle, postText, postStats) => {
  const postStatsArr = [];
  let flag = 0;

  for (let el in postStats) {
    postStatsArr.push(postStats[el]);
  }

  const string = `<ul class="actions post__actions">${postStatsArr.reduce(
    (acc, x) => {
      switch (flag) {
        case 0:
          flag++;
          return (
            acc +
            `<li class="actions__item">
  <button class="actions__btn ">
       <span class="actions__icon actions__icon--like"></span>
      <span class="actions__count">${x}</span>
  </button>
</li>`
          );
          break;

        case 1:
          flag++;
          return (
            acc +
            `<li class="actions__item">
  <button class="actions__btn ">
       <span class="actions__icon actions__icon--dislike"></span>
      <span class="actions__count">${x}</span>
  </button>
</li>`
          );
          break;

        case 2:
          flag++;
          return (
            acc +
            `<li class="actions__item">
  <button class="actions__btn ">
       <span class="actions__icon actions__icon--fav"></span>
      <span class="actions__count">${x}</span>
  </button>
</li>`
          );
          break;
      }
    },
    ""
  )}</ul>`;

  return `<div class="post">
<img class="post__image" src=${urlImg} alt="post image">
<h2 class="post__title">${postTitle}</h2>
<p class="post__text"> ${postText}</p>
${string}
</div>`;
};

const makeCards = arr => {
  return arr.reduce((acc, x) => {
    return acc + createPostCard(x.img, x.title, x.text, x.stats);
  }, "");
};

wrapper[0].innerHTML = makeCards(posts);
