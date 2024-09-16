import SimpleLinkedList from "./simplelinkedlist.js";

export { init };

const list = new SimpleLinkedList();

function init() {
  console.log("Model init");
}

function dump() {
  let node = list.head;
  let output = "";
  while (node != null) {
    output += '"' + node.data + node.id + '"';
    output += " -> ";

    node = node.next;
  }
  output += "null";
  console.log(output);
}

// **** WRAPPERS ****
function addRandomBall() {
  return list.add(randomBall());
}

function addBall(ball) {
  return list.add(ball);
}

function insertBallAfter(newBall, node) {
  return list.insertAfter(newBall, node);
}

function insertBallBefore(newBall, node) {
  return list.insertBefore(newBall, node);
}

function numberOfBalls() {
  return list.size();
}

function removeBall(node) {
  list.remove(node);
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

function findMatches(node) {
  let matches = [node, ...findMatchesLeft(node), ...findMatchesRight(node)];
  removeMatches(matches);
}

function findMatchesLeft(node) {
  const matches = [];
  let nodeL = node.prev;
  while (!!nodeL) {
    if (nodeL.data != node.data) {
      break;
    }
    matches.push(nodeL);
    nodeL = nodeL.prev;
  }
  return matches;
}

function findMatchesRight(node) {
  const matches = [];
  let nodeR = node.next;
  while (!!nodeR) {
    if (nodeR.data != node.data) {
      break;
    }
    matches.push(nodeR);
    nodeR = nodeR.next;
  }
  return matches;
}

function removeMatches(matches) {
  if (matches.length < 3) return;
  matches.forEach((n) => removeBall(n));
}

// **** BALLS ****

const balls = ["🔴", "🔵", "🟡", "🟢"];

function randomBall() {
  return balls[Math.floor(Math.random() * balls.length)];
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
