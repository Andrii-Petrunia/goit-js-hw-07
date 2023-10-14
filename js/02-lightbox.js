import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGalleryItem({ preview, original, description }) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `;
}

function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem).join("");
  gallery.insertAdjacentHTML("beforeend", galleryMarkup);
}

renderGallery();

// Initialize SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Optional: Close lightbox on overlay click
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("sl-overlay")) {
    lightbox.close();
  }
});