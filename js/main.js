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
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#second')
  }).to($('#first .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#first .fourth'), 0.5, {bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#banner'), 0.5, {opacity: 0}, '-=0.5')
    .to($('#ferris'), 0.5, {bottom: '-100%'}, '-=0.3')
    .to($('#first .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.5')
    .to($('#first .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .transition'), 0.2, {bottom: '-15vh', ease: Expo.easeIn})
  ).addTo(c);

  // second scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0
  }).setTween('#second .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', bottom: '5vh', onReverseComplete: jump('#first', true)
  }).addTo(c);

  // second scene: cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#third')
  }).to($('#second .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#second .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#second .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#second .transition'), 0.2, {bottom: '-15vh', ease: Expo.easeIn})
  ).addTo(c);

  // third scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0
  }).setTween('#third .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', bottom: '5vh', onReverseComplete: jump('#second', true)
  }).addTo(c);

  // third scene: cloud transition
  new ScrollMagic.Scene({
    triggerElement: '#third',
    duration: 0,
    offset: 1
  }).setTween(new tl({
    onComplete: jump('#fourth')
  }).to($('#third .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#third .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .fourth'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition'), 0.2, {bottom: '-15vh', ease: Expo.easeIn})
  ).addTo(c);

  // fourth scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#fourth',
    duration: 0
  }).setTween('#fourth .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', bottom: '5vh', onReverseComplete: jump('#third', true)
  }).addTo(c);
});

var tw = TweenMax;
var tl = TimelineMax;

// helpers
function jump(target, reverse) {
  return () => new tl().to(window, 0.5, {scrollTo: target, autoKill: false})
}
