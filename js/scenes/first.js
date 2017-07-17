
/* First Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const ROTATION = 360;
const FERRIS_SPEED = 120;

// sprites
loadSvg('banner', '#banner');
loadSvg('ferris/rear-stand', '#ferris .rear.stand');
loadSvg('ferris/stand', '#ferris .front.stand');
loadSvg('ferris/rear-wheel', '#ferris .rear.wheel');
loadSvg('ferris/wheel', '#ferris .front.wheel');
loadSvg('ferris/pod', '#ferris .pod');

// clouds
loadSvg('clouds/cloud-1', '#cloud-1');
loadSvg('clouds/cloud-2', '#cloud-2');

$(() => {

  // ferris wheel rotation
  tw.to($('#ferris .wheel'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, ease: Linear.easeNone});
  tw.to($('.pods'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '48.5% 43.3%', ease: Linear.easeNone});
  tw.to($('.pod'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 2%', ease: Linear.easeNone});
});
