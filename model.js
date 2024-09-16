import SimpleLinkedList from "./simplelinkedlist.js";

export {init}

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");

}

function dump() {
  let node = list.head;
  let output = "";
  while(node != null) {
    output += '"' + node.data + node.id +'"';
    output += " -> ";
   
    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
  // TODO: Implement
  list.add(randomBall());
}

function addBall(ball) {
  // TODO: Implement
  list.add((ball))
}

// TODO: Implement more functions

function numberOfBalls() {
  // TODO: Implement
  return list.size();
}

function insertBallAfter(node, ball) {
  list.insertAfter(ball, node);
}

// **** CANNON ****
let cannonBall;

function loadCannon() {
  cannonBall = randomBall();
}

function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****

// TODO: Implement functions to find and remove matches


// **** BALLS ****

const balls = ["🔴", "🔵","🟡","🟢"];

function randomBall() {
  return balls[Math.floor(Math.random()*balls.length)];
}

function red() {
  return balls[0];
}

function blue() {
  return balls[1];
}

function yellow() {
  return balls[2];
}

function green() {
  return balls[3];
}

debugger;