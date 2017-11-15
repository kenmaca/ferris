
/* Sixth Scene animations and sprites.
   @author Kenneth Ma (http://kenma.ca), 2017
*/

// sprites
loadSvg('cat-tent/tent', '#tent');
loadSvg('cat-tent/flag-1', '#flag-1');
loadSvg('cat-tent/flag-2', '#flag-2');
loadSvg('cat-tent/flag-3', '#flag-3');
loadSvg('cat-tent/flag-4', '#flag-4');
loadSvg('cat-tent/cat-tongue-in', '#cat-tongue-in');
loadSvg('cat-tent/cat-tongue-out', '#cat-tongue-out');
loadSvg('sharpener/sharpener', '#sharpener');
loadSvg('sharpener/cloud', '#sharpener-cloud');
loadSvg('sharpener/pencil-1', '#pencil-1');
loadSvg('sharpener/pencil-2', '#pencil-2');
loadSvg('sharpener/pencilbox', '#pencilbox');

// 6.0 additions
loadSvg('final/goldolas', '#gondolas');
loadSvg('final/double tent', '#double-tent');
loadSvg('final/strength test', '#strength-test');
loadSvg('final/red tent', '#red-tent');
loadSvg('final/sweet stand', '#sweet-stand');
loadSvg('final/roller coaster', '#rollercoaster');
loadSvg('final/game stands', '#game-stands');
loadSvg('final/yellow blue tent', '#yellow-blue-tent');
loadSvg('final/bear', '#bear');
loadSvg('final/bush by the tent', '#tent-bush');
loadSvg('final/bush 1', '#right-bush');
loadSvg('final/bush 2', '#left-bush');
loadSvg('final/bush 2', '#pencil-bush');
loadSvg('final/popcorn stand', '#popcorn-cart');

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
