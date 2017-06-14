
/* First Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// consts
const ROTATION = 360;
const FERRIS_SPEED = 120;

// sprites
loadSvg('banner', '#banner');
loadSvg('ferris/stand', '#ferris .stand');
loadSvg('ferris/wheel', '#ferris .wheel');
loadSvg('ferris/pod', '#ferris .pod');

// clouds
loadSvg('clouds/cloud 6', '#first .cloud-6');
loadSvg('clouds/cloud 5', '#first .cloud-5');
loadSvg('clouds/cloud 4', '#first .cloud-4');
loadSvg('clouds/cloud 3', '#first .cloud-3');
loadSvg('clouds/cloud 2', '#first .cloud-2');
loadSvg('clouds/cloud 1', '#first .cloud-1');

$(() => {

  // ferris wheel rotation
  tw.to($('#ferris .wheel'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, ease: Linear.easeNone});
  tw.to($('.pods'), FERRIS_SPEED, {rotation: ROTATION, repeat: -1, transformOrigin: '48.5% 43.3%', ease: Linear.easeNone});
  tw.to($('.pod'), FERRIS_SPEED, {rotation: -ROTATION, repeat: -1, transformOrigin: '50% 2%', ease: Linear.easeNone});
});
