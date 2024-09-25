// script.js
import { listenDom, getNewIndex } from "./helpers.js";
import { images, tagLines } from "./sildes.js";

// Sélecteurs d'éléments DOM
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const bannerImg = document.querySelector(".banner-img");
const bannerTagLines = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots"); // Conteneur des dots

// Index de départ
let currentIndex = 0;


// Met à jour l'image et le texte des tags et les Points
const updateBannerImageAndTag = (index, tag) => {
  bannerImg.src = `./assets/images/slideshow/${images[index]}`;
  bannerTagLines.innerHTML = tag;

  dotsContainer.innerHTML = ""; // On vide le conteneur avant de recréer les dots

  images.forEach((_, index) => {
    // const dot = createElement(dotsContainer, "dot");
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dotsContainer.appendChild(dot);

    if (index === currentIndex) {
      dot.classList.add("dot_selected"); // Sélectionne le dot actif
    }
  });
};

// ** Initialisation du diaporama **
updateBannerImageAndTag(currentIndex, tagLines[currentIndex]);

// ** Écouteurs d'événements pour les flèches **
listenDom(arrowLeft, "click", () => {
  currentIndex = getNewIndex(currentIndex, -1, images); // Calculez le nouvel index
  updateBannerImageAndTag(currentIndex, tagLines[currentIndex]); // Mettez à jour l'image
});

listenDom(arrowRight, "click", () => {
  currentIndex = getNewIndex(currentIndex, 1, images); // Calculez le nouvel index
  updateBannerImageAndTag(currentIndex, tagLines[currentIndex]); // Mettez à jour l'image
});
