// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery  = document.querySelector('div.gallery');
const pictureElements = galleryItems.map(
    img => `<a class="gallery__item" href="${img.original}">
    <img class="gallery__image" src="${img.preview}" alt="${img.description}">
    </a>`
).join('');
gallery.insertAdjacentHTML("beforeend", pictureElements);

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});