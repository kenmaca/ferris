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
  var tw = TweenMax;
  var tl = TimelineMax;

  // always in motion: ferris wheel
  tw.to($('g[class*="wheel"], #cars'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
  tw.to($('.car'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});

  // first scene
  new ScrollMagic.Scene({
    triggerElement: '#first',
    duration: '10%'
  }).setPin('#first').addTo(c);

  new ScrollMagic.Scene({
    triggerElement: '#first',
    duration: 0,
    offset: 10
  }).setTween(new tl()
    .to($('#banner'), 0.5, {opacity: 0})
    .to($('#ferris'), 0.5, {bottom: '-100%'}, '-=0.1')
    .to($('#first .fourth'), 0.2, {bottom: 0, ease: Expo.easeOut})
    .to($('#first .third'), 0.2, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#first .second'), 0.2, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to($('#first .first'), 0.2, {opacity: 1, bottom: 0, ease: Expo.easeOut})
    .to(window, 0.5, {scrollTo: '#second', autoKill: false, ease: Expo.easeOut})
  ).addTo(c);

  // second scene
  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: 0
  }).setTween('#second .box', 0.2, {top: '5vh', left: '5vw', right: '5vw'})
    .addTo(c)
    .addIndicators();

  new ScrollMagic.Scene({
    triggerElement: '#second',
    duration: '10%'
  }).setPin('#second').addTo(c);

  // first page transition
});
