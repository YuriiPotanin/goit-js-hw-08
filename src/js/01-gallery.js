// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const imgGallery = document.querySelector(".gallery");
const createMarkup = galleryItems.map(
    ({ preview, original, description }) => `
        <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
        </li> `
    )
    .join(" ");

imgGallery.innerHTML = createMarkup;


const gallery = new SimpleLightbox('.gallery a',{
    captions: true,
    enableKeyboard: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250
    
});

console.log(galleryItems);

