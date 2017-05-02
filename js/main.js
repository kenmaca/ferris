$(() => {

  // consts
  const ROTATION = 360;
  const FERRIS_SPEED = 120;

  // scrollmagic init with aliases
  var c = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // first scene: ferris wheel rotation
  tw.to($('g[class*="wheel"], #cars'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
  tw.to($('.car'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});

  // first scene: cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#first',
    duration: '10%'
  }).setPin('#first').addTo(c);
  new ScrollMagic.Scene({
    triggerElement: '#first',
    duration: 0,
    offset: 10
  }).setTween(new tl({
    onComplete: jump('#second')
  }).to($('#banner'), 0.5, {opacity: 0})
    .to($('#ferris'), 0.5, {bottom: '-100%'}, '-=0.1')
    .to($('#first .fourth'), 0.5, {bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .transition'), 0.5, {bottom: '-15vh', ease: Expo.easeIn})
  ).addTo(c);

  // second scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: '10%'
  }).setPin('#second').addTo(c);
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0
  }).setTween('#second .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', onReverseComplete: jump('#first', true)
  }).addTo(c)
    .addIndicators();

  // first page transition
});

var tw = TweenMax;
var tl = TimelineMax;

// helpers
function jump(target, reverse) {
  return () => {
    seek = new tl().to(window, 0.5, {scrollTo: target, autoKill: false});
    return reverse ? seek.to(window, 0, {scrollTo: {y: -1}, autoKill: false}): seek;
  }
}
