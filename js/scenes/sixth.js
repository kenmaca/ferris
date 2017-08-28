
/* Sixth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('cat-tent');
loadSvg('path-tent');
loadSvg('sharpener/sharpener', "#sharpener");
loadSvg('sharpener/pencil-1', "#pencil-1");
loadSvg('sharpener/pencil-2', "#pencil-2");
loadSvg('sharpener/pencilbox', "#pencilbox");
loadSvg('bushes/bush-1', '#bush-1');
loadSvg('bushes/bush-2', '#bush-2');
loadSvg('bushes/bush-3', '#bush-3');
loadSvg('bushes/bush-4', '#bush-4');
loadSvg('bushes/bush-5', '#bush-5');
loadSvg('bushes/bush-6', '#bush-6');
loadSvg('bushes/bush-7', '#bush-7');
loadSvg('bushes/bush-8', '#bush-8');

// clouds
loadSvg('clouds/cloud-13', '#cloud-13');
loadSvg('clouds/cloud-14', '#cloud-14');

$(() => {
});

const pencilFrontRotation = 200;
const pencilBackRotation = 400;
var sharpen = false;
function sharpenPencil(pencilFront, pencilBack) {
  if (sharpen) {
    var pencilRotateTime;

    if (pencilFront.is(":visible")) {
      pencilFront.hide();
      pencilBack.show();
      pencilRotateTime = pencilFrontRotation;
    } else {
      pencilBack.hide();
      pencilFront.show();
      pencilRotateTime = pencilBackRotation;
    }

    setTimeout(() => {
      sharpenPencil(pencilFront, pencilBack);
    }, pencilRotateTime);
  }
}

function startSharpening() {
  sharpen = true;
  sharpenPencil($('#pencil-1'), $('#pencil-2'));
}

function stopSharpening() {
  sharpen = false;
}

startSharpening();