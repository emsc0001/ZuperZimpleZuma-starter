import SimpleLinkedList from "./simplelinkedlist.js";

const list = new SimpleLinkedList();

export function init() {
  console.log("Model init");
}

export function dump() {
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
export function getFirstBall() {
  return list.head;
}

export function getNextBall(ball) {
  if (!ball) return null;
  return ball.next;
}

export function getPreviousBall(ball) {
  if (!ball) return null;
  return ball.prev;
}

export function addRandomBall() {
  return list.add(randomBall());
}

export function addBall(ball) {
  return list.add(ball);
}

export function insertBallAfter(newBall, node) {
  return list.insertAfter(newBall, node);
}

export function insertBallBefore(newBall, node) {
  return list.insertBefore(newBall, node);
}

export function numberOfBalls() {
  return list.size();
}

export function removeBall(node) {
  list.remove(node);
}

export function clearBalls() {
  let node = list.head;
  while (!!node) {
    list.remove(node);
    node = node.next;
  }
}

// **** CANNON ****
let cannonBall;

export function loadCannon() {
  cannonBall = randomBall();
}

export function getCannonBall() {
  return cannonBall;
}

// **** MATCHES ****

export function findMatches(node) {
  return [node, ...findMatchesRight(node), ...findMatchesLeft(node)];
}

export function findMatchesRight(node) {
  if (!node) return [];
  const matches = [];
  let nodeR = node.prev;
  while (!!nodeR) {
    if (nodeR.data != node.data) {
      break;
    }
    matches.push(nodeR);
    nodeR = nodeR.prev;
  }
  return matches;
}

export function findMatchesLeft(node) {
  if (!node) return [];
  const matches = [];
  let nodeL = node.next;
  while (!!nodeL) {
    if (nodeL.data != node.data) {
      break;
    }
    matches.push(nodeL);
    nodeL = nodeL.next;
  }
  return matches;
}

export function removeMatches(matches) {
  if (matches.length < 3) return;
  matches.forEach((n) => removeBall(n));
}

// **** BALLS ****

const balls = ["🔴", "🔵", "🟡", "🟢"];

export function randomBall() {
  return balls[Math.floor(Math.random() * balls.length)];
}

export function red() {
  return balls[0];
}

export function blue() {
  return balls[1];
}

export function yellow() {
  return balls[2];
}

export function green() {
  return balls[3];
}

//debugger;
