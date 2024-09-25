
/**
 * Ajoute un écouteur d'événement à un élément DOM spécifié.
 *
 * @param {Element} element - L'élément DOM sur lequel écouter l'événement.
 * @param {string} event - Le type d'événement à écouter (ex: 'click', 'mouseover').
 * @param {Function} callback - La fonction à exécuter lorsque l'événement est déclenché.
 */

const listenDom = (element, event, callback) =>
  element.addEventListener(event, callback);

/**
 * Calcule un nouvel index en fonction de l'index actuel, d'un changement de valeur et d'un tableau.
 *
 * @param {number} currentIndex - L'index actuel de l'élément.
 * @param {number} change - La valeur à ajouter à l'index actuel (peut être positive ou négative).
 * @param {Array} array - Le tableau dont on utilise la longueur pour déterminer le nouvel index.
 * @returns {number} - Le nouvel index, toujours valide dans les limites du tableau.
 */
const getNewIndex = (currentIndex, change, array) =>
  (currentIndex + change + array.length) % array.length;

export { listenDom, getNewIndex };
