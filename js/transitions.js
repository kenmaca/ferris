const TRANSITION_SPEED = 1;
const TRANSITION_SPEED_NEXT = 3;

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
  if (direction == "down") {
    // first scene bottom clouds
    tw.to($('#cloud-1-tr'), TRANSITION_SPEED, {top: "40vh"});
    tw.to($('#cloud-2-tr'), TRANSITION_SPEED, {top: "20vh"});
    tw.to($('#cloud-3-tr'), TRANSITION_SPEED, {top: "10vh"});
    tw.to($('#cloud-4-tr'), TRANSITION_SPEED, {top: "50vh"});

    // second scene top clouds
    tw.to($('#cloud-5-tr'), TRANSITION_SPEED_NEXT, {top: "-75vh"});
  } else if (direction == "up") {
    setTimeout(() => {
      tw.to($('#cloud-1-tr'), TRANSITION_SPEED_NEXT, {top: "120vh"});
      tw.to($('#cloud-2-tr'), TRANSITION_SPEED_NEXT, {top: "120vh"});
      tw.to($('#cloud-3-tr'), TRANSITION_SPEED_NEXT, {top: "120vh"});
      tw.to($('#cloud-4-tr'), TRANSITION_SPEED_NEXT, {top: "120vh"});
    }, SCROLLING_SPEED);

    // second scene top clouds
    tw.to($('#cloud-5-tr'), TRANSITION_SPEED, {top: "-35vh"});
  }
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