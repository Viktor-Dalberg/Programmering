let x = random(0,windowWidth)
let y = random(0,windowheight)
let d = 20
let speed = 10
let a = speed
let b = 0

function setup() {
  createCanvas(400, 400);
  ellipseMode
  print("Hello World!")
}

function draw() {
  background(220);
  ellipse(x, y, d)
}

function borderCheck() {
  if (x + d / 2 >= windowWidth) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= windowHeight) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }










 