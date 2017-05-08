
/* Fourth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

$(() => {

  // shrink box
  new ScrollMagic.Scene({
    triggerElement: '#fourth',
    duration: 0
  }).setTween('#fourth .box', 0.2, {
    top: '2vw', left: '2vw', right: '2vw', bottom: '2vw', onReverseComplete: jump('#third', true)
  }).addTo(c);
});
