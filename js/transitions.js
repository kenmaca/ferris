const TRANSITION_SPEED = 1;
const TRANSITION_SPEED_NEXT = 3;
const MOBILE = screen.width < 550;

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
  if (direction == DOWN) {
    tw.to($('#ferris'), 1.5, {bottom: "-100vh", ease: Expo.easeOut});
  } else if (direction == UP) {
    tw.to($('#ferris'), 1, {bottom: "-2vh", ease: Expo.easeOut, delay: 1});
  }
}

function fromSecondScene(direction) {
  console.log("2", direction);

  if (direction == DOWN){

    $("#bird").css("left", "-10vw");
    startBirdAnimation();
    tw.to($('#bird'), 4, {left: "120vw"});
    tw.to($('#carousel'), 1.5, {bottom: "-100vh", ease: Expo.easeOut});

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
              tw.to($('#letter'), 6, {top: "100vh", ease: Expo.easeOut});

              setTimeout(() => {
                $("#letter .balloon-5").hide();
                $("#letter .balloon-1").show();

              }, 1200);
            }, 50);
          }, 75);
        }, 50);
      }, 50);

    }, 1100);

    // stop bird animation
    setTimeout(() => {
      stopBirdAnimation();
    }, 2500);
  } else if (direction == UP) {
    tw.to($("#letter"), 2, {top: "7vh", ease: Expo.easeOut, delay: 0.7});
    tw.to($('#carousel'), 1.5, {bottom: "0vh", ease: Expo.easeOut, delay: 1});
  }
}

function fromThirdScene(direction) {
  console.log("3", direction);
  if (direction == DOWN) {
    tw.to($('#press'), 1.5, {bottom: "-100vh", ease: Expo.easeOut});
    tw.to($("#hot-air-balloon"), 3, {bottom: "150vh", ease: Expo.easeOut, delay: 0.2});
    tw.to($('#font-blocks'), 0.5, {opacity: 0});
  } else {
    tw.to($('#press'), 1.5, {bottom: "-10vh", ease: Expo.easeOut, delay: 1});
    tw.to($("#hot-air-balloon"), 3, {bottom: "60vh", ease: Expo.easeOut, delay: 0.7});
    tw.to($('#font-blocks'), 0.5, {opacity: 1, delay: 1});
  }
}

function fromFourthScene(direction) {
  console.log("4", direction);
  if (direction == DOWN) {
    tw.to($("#sharpener"), 1.5, {bottom: "205vh"});
    setTimeout(() => {
      startSharpening();
    }, 1600);
  } else if (direction == UP) {
    stopSharpening();
    tw.to($("#sharpener"), 1, {bottom: "280vh"});
    setTimeout(() => {
      tw.to($("#sharpener-cloud"), 0.4, {opacity: 1});
    }, 900);
  }
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
    if (direction == DOWN) {
      tw.to($(`${sceneId} .content`), 0.2, {opacity: 0});
      tw.to($(`${sceneId} .transition .first`), 0.5, {bottom: MOBILE ? "0vh": "-35vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .second`), 1.5, {bottom:  MOBILE ? "0vh": "-20vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .third`), 2, {bottom:  MOBILE ? "5vh": "-30vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition .fourth`), 2, {bottom:  MOBILE ? "10vh": "-45vh", ease: Expo.easeOut});
      tw.to($(`${sceneId} .transition`), 0.5, {bottom:  MOBILE ? "0vh": "-20vh", ease: Expo.easeOut, delay: 1.3});
      tw.to($(`${sceneId} .transition`), 0.5, {bottom:  MOBILE ? "0vh": "0vh", ease: Expo.easeOut, delay: 2.1});
    } else if (direction == UP) {
      setTimeout(() => {
        tw.to($(`${sceneId} .transition .second`), 2, {bottom: "-150vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .third`), 1.5, {bottom: "-150vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .fourth`), 2, {bottom: "-150vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .transition .first`), 1.5, {bottom: "-150vh", ease: Expo.easeOut, delay: 0.5});
        tw.to($(`${sceneId} .content`), 0.2, {opacity: 1, delay: 1});

        setTimeout(() => {
          animationHasStarted = false;
          enableScroll();
        }, 1800);
      }, SCROLLING_SPEED-100);
    }
  } else {
    if (direction == UP) {
      animationHasStarted = false;
      enableScroll();
    }
  }

}
