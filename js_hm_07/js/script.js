"use strict";

const wrapper = document.getElementsByClassName("wrapper");

const createPostCard = () => {
  const card = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardTitle = document.createElement("h2");
  const cardText = document.createElement("p");
  const cardButtList = document.createElement("ul");
  const actionBtnIcons = [
    "actions__icon--like",
    "actions__icon--dislike",
    "actions__icon--fav"
  ];

  card.append(cardImage);
  card.append(cardTitle);
  card.append(cardText);
  card.append(cardButtList);

  card.setAttribute("class", "post");
  cardImage.setAttribute("class", "post__image");
  cardImage.setAttribute("src", "http://via.placeholder.com/400x150");
  cardImage.setAttribute("alt", "post image");
  cardTitle.setAttribute("class", "post__title");
  cardText.setAttribute("class", "post__text");
  cardButtList.setAttribute("class", "actions post__actions");

  cardTitle.textContent = "Lorem ipsum dolor";
  cardText.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!";

  for (let i = 0; i < 3; i++) {
    const cardButtListItem = document.createElement("li");
    const cardBtn = document.createElement("button");
    const spanImg = document.createElement("span");
    const spanCount = document.createElement("span");

    cardButtList.append(cardButtListItem);
    cardButtListItem.append(cardBtn);
    cardBtn.append(spanImg);
    cardBtn.append(spanCount);

    cardButtListItem.setAttribute("class", "actions__item");
    cardBtn.setAttribute("class", "actions__btn");
    spanImg.setAttribute("class", `actions__icon ${actionBtnIcons[i]}`);
    spanCount.setAttribute("class", "actions__count");

    spanCount.textContent = "0";
  }

  return card;
};

wrapper[0].appendChild(createPostCard());
