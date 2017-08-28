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
  if (direction == "down") {
    tw.to($('#ferris'), 1, {bottom: "-100vh", ease: Expo.easeOut, delay: 1.8});
  } else if (direction == "up") {
    tw.to($('#ferris'), 1, {bottom: "0vh", ease: Expo.easeOut, delay: 1});
  }
}

function fromSecondScene(direction) {
  console.log("2", direction);
  
  if (direction == "down"){
    $("#bird").css("left", "-40vw");
    startBirdAnimation();
    tw.to($('#bird'), 4, {left: "100vw"});

    // balloon poping, letter falling animations
    setTimeout(() => {
      $("#letter .balloon-1").hide();
      $("#letter .balloon-2").show();

      setTimeout(() => {
        $("#letter .balloon-2").hide();
        $("#letter .balloon-3").show();

        setTimeout(() => {
          $("#letter .balloon-3").hide();
          $("#letter .balloon-4").show();

          setTimeout(() => {
            $("#letter .balloon-4").hide();
            $("#letter .balloon-5").show();

            setTimeout(() => {
              tw.to($('#letter'), 1, {top: "100vh", ease: Expo.easeOut});

              setTimeout(() => {
                $("#letter .balloon-5").hide();
                $("#letter .balloon-1").show();
                $("#letter").css("top", "7vh");

              }, 1200);
            }, 50);
          }, 50);
        }, 50);
      }, 50);

    }, 1600);

    // stop bird animation
    setTimeout(() => {
      stopBirdAnimation();
    }, 2500);
  }
}

function fromThirdScene(direction) {
  console.log("3", direction);
  if (direction == "down") {
    tw.to($("#hot-air-balloon"), 3, {bottom: "150vh", ease: Expo.easeOut, delay: 0.2});
  } else {
    tw.to($("#hot-air-balloon"), 3, {bottom: "50vh", ease: Expo.easeOut, delay: 0.7});
  }
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
  if (scene < 4) {
    var sceneId = sceneNumberToId[scene];
    if (direction == "down") {
      tw.to($(`${sceneId} .content`), 0.2, {opacity: 0});
      tw.to($(`${sceneId} .transition .first`), 1, {bottom: "-5vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .fourth`), 0.7, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .third`), 1, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .second`), 0.7, {bottom: "0vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .fourth`), 0.5, {bottom: "30vh", ease: Expo.easeOut, delay: 0.9});
      tw.to($(`${sceneId} .transition .third`), 0.5, {bottom: "20vh", ease: Expo.easeOut, delay: 1.3});
      tw.to($(`${sceneId} .transition`), 0.5, {bottom: "-20vh", ease: Expo.easeOut, delay: 1.8});
      tw.to($(`${sceneId} .transition`), 0.5, {bottom: "0vh", ease: Expo.easeOut, delay: 2.2});
    } else if (direction == "up") {
      setTimeout(() => {
        tw.to($(`${sceneId} .transition`), 0.5, {bottom: "0vh", ease: Expo.easeOut});
        tw.to($(`${sceneId} .transition .third`), 0.5, {bottom: "0vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .fourth`), 0.5, {bottom: "0vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .second`), 0.7, {bottom: "-150vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .third`), 1, {bottom: "-150vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .fourth`), 0.7, {bottom: "-150vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .transition .first`), 1, {bottom: "-150vh", ease: Expo.easeOut, delay: 1});
        tw.to($(`${sceneId} .content`), 0.2, {opacity: 1, delay: 1});
  
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