import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector(".gallery")
const cardMarkup = addGalleryItems(galleryItems)

galleryRef.insertAdjacentHTML("beforeend", cardMarkup)
galleryRef.addEventListener("click", showModal)

function addGalleryItems(items) {
    return items.map((item) => {
        return `
        <a class="gallery__item" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>`
    })
        .join("")
}

function showModal(event) {
    console.log(event.target)
    event.preventDefault()

    if (event.target.nodeName !== "IMG") {
            return
    }
    
    let gallery = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionsDelay: 250,
    })

}

