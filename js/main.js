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
  tw.to($('#ferris .wheel'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1,});
  tw.to($('.pods'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '48.5% 43.3%'});
  tw.to($('.pod'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 2%'});

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
    .to($('#ferris'), 0.5, {bottom: '-90vh', ease: Expo.easeOut}, '-=0.2')
    .to($('#first div[class*="cloud-"]'), 0.3, {opacity: 0, ease: Expo.easeOut}, '-=0.5')
    .to($('#first .third'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.5')
    .to($('#first .second'), 0.5, {opacity: 1, bottom: 0, ease: Expo.easeOut}, '-=0.2')
    .to($('#first .transition'), 0.2, {bottom: -50, ease: Linear.noEase})
  ).addTo(c);

  // second scene: shrink box
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0
  }).setTween('#second .box', 0.2, {
    top: '5vh', left: '5vw', right: '5vw', bottom: '5vh', onReverseComplete: jump('#first', true)
  }).addTo(c);

  // second scene: floating letters
  tw.to($('#letter'), 5, {y: '+=25px', x: '+=10px', rotation: -3, scale: 1.02, yoyo: true, repeat: -1, ease: Power1.easeInOut});

  // second scene: carousel top
  tw.to($('#carousel .top'), 4, {y: '+=50px', yoyo: true, repeat: -1});
  tw.to($('#carousel .first'), 4, {y: '-=50px', yoyo: true, repeat: -1});
  tw.to($('#carousel .second'), 4, {y: '+=50px', yoyo: true, repeat: -1});

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
    .to($('#second .transition'), 0.2, {bottom: -50, ease: Linear.noEase})
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
    .to($('#third .transition'), 0.2, {bottom: -50, ease: Linear.noEase})
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
