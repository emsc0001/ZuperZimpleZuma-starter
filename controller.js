import * as model from "./model.js";
import * as view from "./view.js";
import * as animations from "./animations.js";

// TODO: Export functions used by the view

window.addEventListener("load", init);

function init() {
  console.log("Controller init");
  model.init();
  view.init();

  createInitialChain();
  model.loadCannon();
  view.updateDisplay(model);
  // show debug info on the model
  model.dump();

  // store "shortcuts" to model and view in window
  window.model = model;
  window.view = view;
}

function createInitialChain() {
  for (let i = 0; i < 5; i++) {
    model.addRandomBall();
  }
}

export function addRandomBall() {
  const newBall = model.addRandomBall();
  view.updateDisplay(model);
  animations.animateNewBall(model, newBall);
}

export function insertBallAfter(ball) {
  const newBall = model.getCannonBall();
  const insertedBall = model.insertBallAfter(newBall, ball);
  model.loadCannon();
  view.updateDisplay(model);
  animations.animateCannonBall(model, insertedBall);
}

// **** ANIMATIONS ****

// TODO: Add controller functions to be called when animations have completed

export function removeMatches(ball) {
  const matches = model.findMatches(ball);
  if (matches.length < 3) return;
  animations.animateRemoveBalls(model, matches);
}

export function removeBalls(balls, cb) {
  model.removeMatches(balls);
  cb();
}
