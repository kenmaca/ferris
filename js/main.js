$(() => {

  // consts
  const ROTATION = 360;
  const CLOUD_SCALE = 0.5;
  const CLOUD_BOUNCE = () => randInt(5, 10);
  const FERRIS_SCALE = 2;

  // scrollmagic init with aliases
  var c = new ScrollMagic.Controller();
  var tw = TweenMax;
  var tl = TimelineMax;

  // expand ferris
  new ScrollMagic.Scene({
    duration: '20%'
  })
    .setTween(new tl().add([

      // ferris wheel
      tw.to($('#ferris'), 1, {scale: FERRIS_SCALE, transformOrigin: '100% 100%'}),

      // clouds
      tw.to($('div[class*="clouds-"]'), 1, {scale: CLOUD_SCALE, transformOrigin: '50% 50%'}),

      // hide sign
      tw.to($('.banner'), 1, {opacity: 0})
    ]))
    .addIndicators()
    .setPin('#first')
    .addTo(c);

  // always in motion: ferris wheel
  tw.to($('g[class*="wheel"]'), 120, {rotation: ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
  tw.to($('#cars'), 120, {rotation: ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
  tw.to($('.car'), 120, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});

  // always in motion: clouds
  tw.to($('.clouds-1'), 1.5, {y: CLOUD_BOUNCE(), yoyo: true, repeat: -1});
  tw.to($('.clouds-2'), 1, {y: CLOUD_BOUNCE(), yoyo: true, repeat: -1});
  tw.to($('.clouds-3'), 2, {y: CLOUD_BOUNCE(), yoyo: true, repeat: -1});
  tw.to($('.clouds-4'), 2.5, {y: CLOUD_BOUNCE(), yoyo: true, repeat: -1});
});

// utils
function randInt(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (from - to + 1)) + from;
}
