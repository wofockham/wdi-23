function setup () {
  createCanvas(640, 480);
}

function draw () {
  if (mouseIsPressed) {
    fill(0); // Use black as the fill colour
  } else {
    fill(255); // Use white as the fill colour
  }
  ellipse(mouseX, mouseY, 80, 80);
}
