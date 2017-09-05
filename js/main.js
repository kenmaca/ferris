
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

const DOWN = "down";
const UP = "up";
const SCROLL_DOWN_DELAY = 1600; //milliseconds
const SCROLL_UP_DELAY = 0;
const SCROLLING_SPEED = 700;
var timeoutId;
var animationIsFinished = false;
var animationHasStarted = false;

$('#frame').fullpage({
  scrollingSpeed: SCROLLING_SPEED,
  easing: 'easeInOutCubic',
  onLeave: function(index, nextIndex, direction){
    disableScroll();

    if (!animationHasStarted) {
      animationHasStarted = true;

      var delay;
  
      if (direction == UP) {
        cloudTransition(direction, nextIndex);
        sceneNumberToTransition[nextIndex](direction);
        delay = SCROLL_UP_DELAY;
      } else if (direction == DOWN) {
        cloudTransition(direction, index);
        sceneNumberToTransition[index](direction);
        delay = SCROLL_DOWN_DELAY;
        if (index >= 4) delay = 0;
      }
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function(){
        animationIsFinished = true;
        $.fn.fullpage.moveTo(nextIndex);
        clearTimeout(timeoutId);
        animationIsFinished = false;

        if (direction == DOWN){
          animationHasStarted = false;
          enableScroll();
        }
      }, delay);
    }
    return animationIsFinished;
  }
});