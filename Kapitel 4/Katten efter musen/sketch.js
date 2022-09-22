let x; 
let y; 
let d = 20;
let speedM = 1.5;
let speedC = 2;
let aM = speedM;
let bM = 0;
let aC = speedC;
let bC = 0
let imgWidth = 60
let imgHeight = 75

function preload() {
  imgMouse = loadImage('mus_2.png');
  imgCat = loadImage('cat.png');
}

function setup() {
  createCanvas(400, 400);
  xM = random(0,width);
  yM = random(0,height);
  xC = random(0,width);
  yC = random(0,height);
}

function draw() {
  background(220);
  //circle(x, y, d)
  image(imgMouse, xM, yM, imgWidth, imgHeight)
  image(imgCat, xC, yC, imgWidth, imgHeight)
  xM+=speedM*aM;
  yM+=speedM*bM;
  xC+=speedC*aC;
  yC+=speedC*bC;
  borderCheck();
}

function borderCheck() {
  if (xM + d / 2 >= width-imgWidth) {
    aM = -speedM;
    bM = 0;
  }
  if (xM - d / 2 <= 0) {
    aM = speedM;
    bM = 0;
  }
  if (yM + d / 2 >= height-imgHeight) {
    aM = 0;
    bM = -speedM;
  }
  if (yM - d / 2 < 0) {
    aM = 0;
    bM = speedM;
  }
  if (xC + d / 2 >= width-imgWidth) {
    aC = -speedC;
    bC = 0;
  }
  if (xC - d / 2 <= 0) {
    aC = speedC;
    bC = 0;
  }
  if (yC + d / 2 >= height-imgHeight) {
    aC = 0;
    bC = -speedC;
  }
  if (yC - d / 2 < 0) {
    aC = 0;
    bC = speedC;
  }
 }

 function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    bM = speedM;
    aM = 0;
  }
  if (keyCode === UP_ARROW) {
    bM = -speedM;
    aM = 0;
  }
  if (keyCode === LEFT_ARROW) {
    bM = 0;
    aM = -speedM;
  }
  if (keyCode === RIGHT_ARROW) {
    bM = 0;
    aM = speedM;
  }
 }

