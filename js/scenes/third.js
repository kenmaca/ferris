
/* Third Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('hot-air-balloon', '#hot-air-balloon');
loadSvg('press/base', '#press .base');
loadSvg('press/roll-1', '#press .first.roll');
loadSvg('press/roll-2', '#press .second.roll');
loadSvg('press/half-wheel-1', '#press .first.half-wheel');
loadSvg('press/half-wheel-2', '#press .second.half-wheel');
loadSvg('press/wheel-1', '#press .first.wheel');
loadSvg('press/wheel-2', '#press .second.wheel');

$(() => {
  shrinkScene('#second', '#third', c);

  // slide hot-air-balloon in
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0
  }).setTween('#hot-air-balloon-container', 1, {
    top: '-10vh',
    ease: Power1.easeInOut
  }).addTo(c);

  // hot-air-balloon sway
  tw.to($('#hot-air-balloon'), 4, {
    y: '+=2vh',
    x: '+=2vw',
    rotation: -2,
    scale: 1.02,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut
  });

  // cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#fourth')
  }).to($('#third .content'), 0.2, {opacity: 0})
    .to($('#third .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#hot-air-balloon-container'), 1, {top: '-120vh', ease: Power1.easeInOut}, '-=0.2')
    .to($('#third .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=1')
    .to($('#third .transition .fourth'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.8')
    .to($('#third .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
  ).addTo(c);
});
