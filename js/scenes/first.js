
/* First Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const ROTATION = 360;
const FERRIS_SPEED = 120;

// sprites
loadSvg('banner', '#banner');
loadSvg('ferris/stand', '#ferris .stand');
loadSvg('ferris/wheel', '#ferris .wheel');
loadSvg('ferris/pod', '#ferris .pod');

$(() => {

  // ferris wheel rotation
  tw.to($('#ferris .wheel'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, ease: Linear.easeNone});
  tw.to($('.pods'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '48.5% 43.3%', ease: Linear.easeNone});
  tw.to($('.pod'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 2%', ease: Linear.easeNone});

  // cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#first',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#second')
  }).to($('#first .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#first .transition .fourth'), 0.5, {bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#banner'), 0.5, {opacity: 0}, '-=0.5')
    .to($('#ferris'), 0.5, {bottom: '-90vh', ease: Expo.easeOut}, '-=0.2')
    .to($('#first div[class*="cloud-"]'), 0.3, {opacity: 0, ease: Expo.easeOut}, '-=0.5')
    .to($('#first .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.5')
    .to($('#first .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
  ).addTo(c);
});
