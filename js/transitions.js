const TRANSITION_SPEED = 1;
const TRANSITION_SPEED_NEXT = 3;

const sceneNumberToId = {
  1: "#first",
  2: "#second",
  3: "#third",
  4: "#fourth",
  5: "#fifth",
  6: "#sixth"
};

const sceneNumberToTransition = {
  1: fromFirstScene,
  2: fromSecondScene,
  3: fromThirdScene,
  4: fromFourthScene,
  5: fromFifthScene,
  6: fromSixthScene
};

function fromFirstScene(direction) {
  console.log("1", direction);
}

function fromSecondScene(direction) {
  console.log("2", direction);
}

function fromThirdScene(direction) {
  console.log("3", direction);
}

function fromFourthScene(direction) {
  console.log("4", direction);
}

function fromFifthScene(direction) {
  console.log("5", direction);
}

function fromSixthScene(direction) {
  console.log("6", direction);
}

function cloudTransition(direction, scene) {
  if (scene < 5) {
    var sceneId = sceneNumberToId[scene];
    if (direction == "down") {
      tw.to($(`${sceneId} .content`), 0.2, {opacity: 0});
      tw.to($(`${sceneId} .transition .first`), 1, {bottom: "-5vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .fourth`), 0.7, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .third`), 1, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .second`), 0.7, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .fourth`), 0.5, {bottom: "30vh", ease: Expo.easeOut, delay: 0.9});
      tw.to($(`${sceneId} .transition .third`), 0.5, {bottom: "20vh", ease: Expo.easeOut, delay: 1.3});
      tw.to($(`${sceneId} .transition`), 0.5, {bottom: "-5vh", ease: Expo.easeOut, delay: 1.8});
    } else if (direction == "up") {
      setTimeout(() => {
        tw.to($(`${sceneId} .transition`), 0.5, {bottom: "0vh", ease: Expo.easeOut});
        tw.to($(`${sceneId} .transition .third`), 0.5, {bottom: "0vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .fourth`), 0.5, {bottom: "0vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .second`), 0.7, {bottom: "-70vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .third`), 1, {bottom: "-70vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .fourth`), 0.7, {bottom: "-70vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .first`), 1, {bottom: "-70vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .content`), 0.2, {opacity: 1, delay: 1.8});
  
        setTimeout(() => {
          animationHasStarted = false;
          enableScroll();
        }, 1800);
      }, SCROLLING_SPEED-100);
    }
  } else {
    if (direction == "up") {
      animationHasStarted = false;
      enableScroll();
    }
  }
  
}