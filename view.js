import * as controller from "./controller.js";
export { init, updateDisplay };

// *********************************
// *                               *
// *          THE VIEW             *
// *                               *
// *********************************

function init() {
  console.log("View init");
  document.querySelector("#addball").addEventListener("click", addNewBall);
}

function addNewBall() {
  // notify controller
  controller.addRandomBall();
}

const visualBalls = {
  "🔴": "red-ball.png",
  "🔵": "blue-ball.png",
  "🟡": "yellow-ball.png",
  "🟢": "green-ball.png",
};

const modelToView = new Map();
export function getVisualBall(ball) {
  return modelToView.get(ball);
}

function updateDisplay(model) {
  // Update the entire chain

  const visualChain = document.querySelector("#chain");
  // remove everything
  visualChain.innerHTML = "";

  // iterate through model of balls with the usual linked list method:
  // - find the first, loop while it isn't null, inside the loop: find the next
  let ball = model.getFirstBall();
  while (!!ball) {
    // add visual ball
    const visualBall = createVisualBall(ball.data);
    visualChain.append(visualBall);
    // add button next to ball
    addButtonTo(visualBall, ball);

    modelToView.set(ball, visualBall);

    ball = model.getNextBall(ball);
  }
  // Also update the cannonball
  updateCannonBall(model.getCannonBall());
}

function updateCannonBall(color) {
  const visualCannon = document.querySelector("#cannon");
  visualCannon.innerHTML = "";
  const visualCannonBall = createVisualBall(color);
  visualCannon.append(visualCannonBall);
}

function createVisualBall(color) {
  const visualBall = document.createElement("div");
  visualBall.classList.add("ball");
  const image = document.createElement("img");
  image.src = "images/" + visualBalls[color];
  visualBall.append(image);
  return visualBall;
}

function addButtonTo(visualBall, ballModel) {
  const button = createButton();
  visualBall.append(button);
  // handle click
  button.addEventListener("click", () => {
    // notify controller
    controller.insertBallAfter(ballModel);
  });
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "↑";
  return button;
}
