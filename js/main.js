
/* Collection of common functions, controllers, and elements.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// scrollmagic init with aliases
var c = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

var tw = TweenMax;
var tl = TimelineMax;

// helpers
/* Provides a reusable scroller that scrolls the window to the target
   element (usually selected by id) when called.

   @param target an element to scroll to
   @return a scroller function
*/
function jump(target) {
  // return () => new tl().to(window, 0.5, {scrollTo: target})
  return () => {};
}

/* Creates a new animation to shrink a scene box with reversing animation.

   @param from the previous scene selector
   @param to the current scene selector
   @param controller the ScrollMagic controller
   @return the animation Scene
*/
function shrinkScene(from, to, controller) {
  return new ScrollMagic.Scene({
    triggerElement: to,
    duration: 0
  }).setTween(`${to} .box`, 0.2, {
    top: '2vw',
    left: '2vw',
    right: '2vw',
    bottom: '2vw',
    onReverseComplete: jump(from, true)
  }).addTo(controller);
}

$(() => {
  $('#frame').fullpage({});
})
