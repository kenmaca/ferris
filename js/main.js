
/* Collection of common functions, controllers, and elements.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

var tw = TweenMax;
var tl = TimelineMax;
var twl = TweenLite;

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

const DELAY = 100; //milliseconds
const SCROLLING_SPEED = 1000;
var timeoutId;
var animationIsFinished = false;
var animationHasStarted = false;

$('#frame').fullpage({
  scrollingSpeed: SCROLLING_SPEED,
  onLeave: function(index, nextIndex, direction){
    var curTime = new Date().getTime();
    
    if (!animationHasStarted) {
      if (direction == "down") sceneNumberToTransition[index](direction);
      else sceneNumberToTransition[nextIndex](direction);
    }
    animationHasStarted = true;
    
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      animationIsFinished = true;
      $.fn.fullpage.moveTo(nextIndex);
      clearTimeout(timeoutId);
      animationIsFinished = false;
      animationHasStarted = false;
    }, DELAY);
    
    return animationIsFinished;
  },
});