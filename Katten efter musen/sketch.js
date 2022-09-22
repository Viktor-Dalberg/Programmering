let x; 
let y; 
let d = 20;
let speed = 2;
let a = speed;
let b = 0;
let imgSize = 60

function preload() {
  imgMouse = loadImage('mus_2.PNG');
  //imgCat = loadImage()
}

function setup() {
  createCanvas(400, 400);
  x = random(0,width);
  y = random(0,height);
}

function draw() {
  background(220);
  //circle(x, y, d)
  image(imgMouse, x, y, imgSize, imgSize)
  x+=speed*a;
  y+=speed*b;
  borderCheck();
}

function borderCheck() {
  if (x + d / 2 >= width-imgSize) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height-imgSize) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

