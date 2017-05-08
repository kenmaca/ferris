
/* Second Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const CAROUSEL_DELTA = 40;

// sprites
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

$(() => {
  shrinkScene('#first', '#second', c);

  // floating letters
  tw.to($('#letter'), 5, {y: '+=13%', x: '+=5%', rotation: -3, scale: 1.02, yoyo: true, repeat: -1, ease: Power1.easeInOut});

  // carousel top
  tw.to($('#carousel .top'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .top .screw'), 4, {y: `+=${CAROUSEL_DELTA * 0.3}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .first'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .second'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .third'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .fourth'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .fifth'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .sixth'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});

  // cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#third')
  }).to($('#second .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#second .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#second .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#second .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
  ).addTo(c);
});
