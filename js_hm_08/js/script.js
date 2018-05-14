"use strict";

const galleryItems = [
  { preview: "img/1_640.jpeg", fullview: "img/1_1280.jpeg", alt: "alt text 1" },
  { preview: "img/2_640.jpeg", fullview: "img/2_1280.jpeg", alt: "alt text 2" },
  { preview: "img/1_640.jpeg", fullview: "img/1_1280.jpeg", alt: "alt text 3" },
  { preview: "img/2_640.jpeg", fullview: "img/2_1280.jpeg", alt: "alt text 4" },
  { preview: "img/1_640.jpeg", fullview: "img/1_1280.jpeg", alt: "alt text 5" },
  { preview: "img/2_640.jpeg", fullview: "img/2_1280.jpeg", alt: "alt text 6" }
];

class Gallery {
  constructor(items, parentNode, defaultActiveItem) {
    this.items = items;
    this.parentNode = parentNode;
    this.defaultActiveItem = defaultActiveItem;
  }

  render() {
    const previewItems = `<ul class="preview"> ${this.items.reduce(
      (acc, el) => {
        if (typeof acc === "object") {
          return `<li><img src="${acc.preview}" alt="${
            acc.alt
          }" data-fullview="${
            acc.fullview
          }" width="640" height="426"></li><li><img src="${el.preview}" alt="${
            el.alt
          }" data-fullview="${el.fullview}" width="640" height="426"></li>`;
        } else {
          return (
            acc +
            `<li><img src="${el.preview}" alt="${el.alt}" data-fullview="${
              el.fullview
            }" width="640" height="426" ></li>`
          );
        }
      }
    )}</ul>`;

    this.parentNode.innerHTML = `<div class="image-gallery js-image-gallery">

    <div class="fullview">
        <img class="fullview_img" src=" ${
          this.items[this.defaultActiveItem].fullview
        }" alt="${
      this.items[this.defaultActiveItem].alt
    }" width="1280" height="766">
    </div>
${previewItems}
</div>`;
  }

  showFullImg() {
    const previewContainer = document.querySelector(".preview");
    const fullviewImg = document.querySelector(".fullview_img");

    previewContainer.addEventListener(
      "click",
      e => (fullviewImg.src = e.target.dataset.fullview)
    );
  }
}

const wrapper = document.querySelector(".wrapper");
const myGallery = new Gallery(galleryItems, wrapper, 1);

myGallery.render();
myGallery.showFullImg();
