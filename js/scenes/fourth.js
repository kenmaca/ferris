
/* Fourth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('swings');
loadSvg('sharpener');
loadSvg('popcorn');

$(() => {

  // scroll to swings
  new ScrollMagic.Scene({

    // all scenes (scene * number of scenes)
    triggerElement: '#first',
    duration: $('#fourth').height() * 7
  }).setTween('#swings', {

    // adjusts the amount of scroll proportionate to scene
    bottom: $('#fourth').height() * 0.6
  }).addTo(c);

  // scroll to sharpener
  new ScrollMagic.Scene({

    // all scenes (scene * number of scenes)
    triggerElement: '#first',
    duration: $('#fourth').height() * 7
  }).setTween('#sharpener', {

    // adjusts the amount of scroll proportionate to scene
    bottom: $('#fourth').height() * 1.3
  }).addTo(c);
});
