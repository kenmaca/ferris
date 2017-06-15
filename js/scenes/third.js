
/* Third Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('hot-air-balloon', '#hot-air-balloon');
loadSvg('press/base', '#press .base');
loadSvg('press/roll-1', '#press .first.roll');
loadSvg('press/roll-2', '#press .second.roll');
loadSvg('press/half-wheel-1', '#press .first.half-wheel');
loadSvg('press/half-wheel-2', '#press .second.half-wheel');
loadSvg('press/wheel-1', '#press .first.wheel');
loadSvg('press/wheel-2', '#press .second.wheel');
loadSvg('font-blocks', '#font-blocks');

// clouds
loadSvg('clouds/cloud 10', '#third .cloud-10');

$(() => {

  // hot-air-balloon sway
  tw.to($('#hot-air-balloon'), 4, {
    y: '+=2vh',
    x: '+=2vw',
    rotation: -2,
    scale: 1.02,
    yoyo: true,
    repeat: -1,
    ease: Power1.easeInOut
  });
});
