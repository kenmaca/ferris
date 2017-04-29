$(() => {

  // consts
  const ROTATION = 360;
  const FERRIS_SPEED = 120;

  // scrollmagic init with aliases
  var c = new ScrollMagic.Controller();
  var tw = TweenMax;
  var tl = TimelineMax;

  // always in motion: ferris wheel
  tw.to($('g[class*="wheel"], #cars'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
  tw.to($('.car'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 50%', ease: Linear.easeNone});
});

// utils
function randInt(from, to) {
  from = Math.ceil(from);
  to = Math.floor(to);
  return Math.floor(Math.random() * (from - to + 1)) + from;
}
