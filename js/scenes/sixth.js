
/* Sixth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('cat-tent/tent', '#tent');
loadSvg('cat-tent/flag-1', '#flag-1');
loadSvg('cat-tent/flag-2', '#flag-2');
loadSvg('cat-tent/flag-3', '#flag-3');
loadSvg('cat-tent/flag-4', '#flag-4');
loadSvg('path-tent');
loadSvg('cat-tent/cat-tongue-in', '#cat-tongue-in');
loadSvg('cat-tent/cat-tongue-out', '#cat-tongue-out');
loadSvg('sharpener/sharpener', '#sharpener');
loadSvg('sharpener/cloud', '#sharpener-cloud');
loadSvg('sharpener/pencil-1', '#pencil-1');
loadSvg('sharpener/pencil-2', '#pencil-2');
loadSvg('sharpener/pencilbox', '#pencilbox');
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

// Sharpener animation
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

// cat-tent flag animation
var flagAnimation = false;
const flagAnimationTime = 300;
function animateFlag(flag1, flag2, flag3, flag4) {
  if (flagAnimation) {
    if (flag1.is(":visible")) {
      flag1.hide();
      flag2.show();
    } else if (flag2.is(":visible")) {
      flag2.hide();
      flag3.show();
    } else if (flag3.is(":visible")) {
      flag3.hide();
      flag4.show();
    } else {
      flag4.hide();
      flag1.show();
    }

    setTimeout(() => {
      animateFlag(flag1, flag2, flag3, flag4);
    }, flagAnimationTime);
  }
}

function startFlagAnimation() {
  flagAnimation = true;
  animateFlag($('#flag-1'), $('#flag-2'), $('#flag-3'), $('#flag-4'));
}

function stopFlagAnimation() {
  flagAnimation = false;
}

// cat-tent cat animation
var catAnimation = false;
const catAnimationTime = 400;
function animateCat(catTongueIn, catTongueOut) {
  if (catAnimation) {
    if (catTongueIn.is(":visible")) {
      catTongueIn.hide();
      catTongueOut.show();
    } else {
      catTongueOut.hide();
      catTongueIn.show();
    }
  
    setTimeout(() => {
      animateCat(catTongueIn, catTongueOut);
    }, catAnimationTime);
  }
}

function startCatAnimation() {
  catAnimation = true;
  animateCat($('#cat-tongue-in'), $('#cat-tongue-out'));
}

function stopCatAnimation() {
  catAnimation = false;
}

$(() => {
  startFlagAnimation();
  startCatAnimation();
});