import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
  })
  .join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
console.log(galleryItems);

galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains("gallery__image");

  if (!isImage) {
    return;
  }

  const imageUrl = event.target.dataset.source;

  openModal(imageUrl);
}

function openModal(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
  `);

  instance.show();

  // Додаємо слухач клавіш для закриття модального вікна
  document.addEventListener("keydown", onKeyPress);

  function onKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

function removeKeyPressListener() {
  document.removeEventListener("keydown", onKeyPress);
}
