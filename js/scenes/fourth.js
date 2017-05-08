
/* Fourth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('swings', '#swings');

$(() => {
  shrinkScene('#third', '#fourth', c);

  // scroll to swings
  new ScrollMagic.Scene({

    // all scenes (scene * number of scenes)
    triggerElement: '#first',
    duration: $('#fourth').height() * 5
  }).setTween('#swings', {

    // adjusts the amount of scroll proportionate to scene
    bottom: $('#fourth').height() * -0.1
  }).addTo(c);

  // cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#fourth',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#fifth')
  }).to($('#fourth .content'), 0.2, {opacity: 0})
    .to($('#fourth .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#fourth .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#fourth .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=1')
    .to($('#fourth .transition .fourth'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.8')
    .to($('#fourth .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
  ).addTo(c);
});
