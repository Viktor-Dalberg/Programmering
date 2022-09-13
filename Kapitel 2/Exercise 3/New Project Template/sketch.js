function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  fill(fillVal);
  rect(25, 25, 50, 50);
  if (keyCode === f) {
    square(200, 200, 50);
  } else if (keyCode === c) {
    circle(200, 200, 50);
  } else if (keyCode === e){
    ellipse(200, 200, 50, 100)
  }
}