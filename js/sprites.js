
/* SVG Sprites Loader via js instead of inline for caching.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const SVG_PATH = 'assets/img/main';

/* Loads an SVG file directly into a DOM element for browser caching.

   @param from the file name without extension or path
   @param to the DOM selector
   @return A Promise containing the DOM element
*/
function loadSvg(from, to) {
  return fetch(`${SVG_PATH}/${from}.svg`)
    .then(response => response.text())
    .then(svg => $(to ? to: `#${from}`).html(svg));
}
