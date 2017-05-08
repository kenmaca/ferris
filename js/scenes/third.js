
/* Third Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('hot-air-balloon', '#third .hot-air-balloon');

$(() => {

  // shrink box
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0
  }).setTween('#third .box', 0.2, {
    top: '2vw', left: '2vw', right: '2vw', bottom: '2vw', onReverseComplete: jump('#second', true)
  }).addTo(c);

  // cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#fourth')
  }).to($('#third .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#third .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition .fourth'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
  ).addTo(c);
});
