function setup () {
  createCanvas(380, 1180);
  background(255, 204, 0);
  canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";
}

function draw () {
  if (mouseIsPressed) {
    fill(606060);
  } else {
    fill(255);
  }
  quad(mouseX, mouseY, 300, 260);

}
