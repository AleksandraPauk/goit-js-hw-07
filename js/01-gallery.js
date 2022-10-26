import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const cardsMarkup = makeGallery(galleryItems);

galleryRef.addEventListener("click", showModal);
galleryRef.insertAdjacentHTML("beforeend", cardsMarkup);

function makeGallery(items) {
  return items
    .map((item) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                class="gallery__image"
                src="${item.preview}"
                data-source="${item.original}"
                alt="${item.description}"
                />
            </a>
        </div>`;
    })
    .join("");
}

function showModal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  event.preventDefault();

  const instance = basicLightbox.create(
    `<div class="modal">
        <img src="${event.target.dataset.source}">
    </div>
    `,
    {
      onShow() {
        document.addEventListener("keydown", closeModal);
      },

      onClose() {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();

  function closeModal(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}


