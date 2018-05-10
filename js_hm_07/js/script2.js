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

  return `<div class="post">
<img class="post__image" src=${urlImg} alt="post image">
<h2 class="post__title">${postTitle}</h2>
<p class="post__text"> ${postText}</p>

<ul class="actions post__actions">


<li class="actions__item">
    <button class="actions__btn ">
         <span class="actions__icon actions__icon--fav"></span>
        <span class="actions__count">0</span>
    </button>
</li>


</ul>
</div>`;
};

wrapper[0].innerHTML = createPostCard(
  posts[0].img,
  posts[0].title,
  posts[0].text,
  posts[0].stats
);
