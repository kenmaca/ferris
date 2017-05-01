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

  // $('#container').on('click', () => {
  //   console.log(`clicked: ${$('#container').data('opened')}`);
  //   $('#container').data('opened')
  //     ? $('#container').removeClass('reveal').data('opened', false)
  //     : $('#container').addClass('reveal').data('opened', true);
  // });

  // new ScrollMagic.Scene({
	//    triggerElement: "#trigger1"
	// })
	// 					.setTween("#animate1", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	// 					.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
	// 					.addTo(controller);
});
