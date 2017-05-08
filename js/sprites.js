
/* SVG Sprites Loader via js instead of inline for caching.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const SVG_PATH = 'assets/img/main';

$(() => {

  /* transition clouds */
  loadSvg('transition/first', '.transition .first');
  loadSvg('transition/second', '.transition .second');
  loadSvg('transition/third', '.transition .third');
  loadSvg('transition/fourth', '.transition .fourth');

  /* clouds */
  loadSvg('clouds/a', '.cloud-1');
  loadSvg('clouds/b', '.cloud-2');
  loadSvg('clouds/c', '.cloud-3');
  loadSvg('clouds/d', '.cloud-4');
  loadSvg('clouds/e', '.cloud-5');
});

/* Loads an SVG file directly into a DOM element for browser caching.

   @param from the file name without extension or path
   @param to the DOM selector
   @return A Promise containing the DOM element
*/
function loadSvg(from, to) {
  return fetch(`${SVG_PATH}/${from}.svg`)
    .then(response => response.text())
    .then(svg => $(to).html(svg));
}
