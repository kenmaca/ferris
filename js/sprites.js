
/* SVG Sprites Loader via js instead of inline for caching.
   @author Kenneth Ma, 2017
*/
$(() => {

  /* common: transition clouds */
  loadSvg('transition/first', '.transition .first');
  loadSvg('transition/second', '.transition .second');
  loadSvg('transition/third', '.transition .third');
  loadSvg('transition/fourth', '.transition .fourth');

  /* common: clouds */
  loadSvg('clouds/a', '.cloud-1');
  loadSvg('clouds/b', '.cloud-2');
  loadSvg('clouds/c', '.cloud-3');
  loadSvg('clouds/d', '.cloud-4');
  loadSvg('clouds/e', '.cloud-5');

  /* scene 1 */
  loadSvg('banner', '#banner');
  loadSvg('ferris/stand', '#ferris .stand');
  loadSvg('ferris/wheel', '#ferris .wheel');
  loadSvg('ferris/pod', '#ferris .pod');

  /* scene 2 */
  loadSvg('carousel/screw', '#carousel .top .screw');
  loadSvg('carousel/handle-1', '#carousel .top .handle .first');
  loadSvg('carousel/base', '#carousel .base');
  loadSvg('carousel/horse-1', '#carousel .horses .first');
  loadSvg('carousel/horse-2', '#carousel .horses .second');
  loadSvg('carousel/horse-3', '#carousel .horses .third');
  loadSvg('carousel/horse-4', '#carousel .horses .fourth');
  loadSvg('carousel/horse-5', '#carousel .horses .fifth');
  loadSvg('carousel/horse-6', '#carousel .horses .sixth');
  loadSvg('letter', '#second #letter');

  /* scene 3 */
  loadSvg('hot-air-balloon', '#third .hot-air-balloon');
});

function loadSvg(from, to) {
  return fetch(`assets/img/main/${from}.svg`)
    .then(response => response.text())
    .then(svg => $(to).html(svg));
}
