function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      ellipse(mouseX, mouseY, 30, 30);
    }
    else if (mouseButton == RIGHT) {
      rect(mouseX, mouseY, 40, 20);
    }
  }
}

