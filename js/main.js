$(() => {

  // consts
  const ROTATION = 360;
  const FERRIS_SPEED = 120;
  const CAROUSEL_DELTA = 40;

  // scrollmagic init with aliases
  var c = new ScrollMagic.Controller({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  // first scene: ferris wheel rotation
  tw.to($('#ferris .wheel'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, ease: Linear.easeNone});
  tw.to($('.pods'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '48.5% 43.3%', ease: Linear.easeNone});
  tw.to($('.pod'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 2%', ease: Linear.easeNone});

  // first scene: cloud transition
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

  // second scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0
  }).setTween('#second .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', bottom: '5vh', onReverseComplete: jump('#first', true)
  }).addTo(c);

  // second scene: floating letters
  tw.to($('#letter'), 5, {y: '+=13%', x: '+=5%', rotation: -3, scale: 1.02, yoyo: true, repeat: -1, ease: Power1.easeInOut});

  // second scene: carousel top
  tw.to($('#carousel .top'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .top .screw'), 4, {y: `+=${CAROUSEL_DELTA * 0.3}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .first'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .second'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .third'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .fourth'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .fifth'), 4, {y: `-=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});
  tw.to($('#carousel .horses .sixth'), 4, {y: `+=${CAROUSEL_DELTA}%`, yoyo: true, repeat: -1});

  // second scene: cloud transition
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
  }).to($('#third .transition .first'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#third .transition .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition .fourth'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#third .transition'), 0.2, {bottom: -50, ease: Linear.easeNone})
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
