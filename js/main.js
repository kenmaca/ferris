
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
  return () => new tl().to(window, 0.5, {scrollTo: target, autoKill: false})
}
