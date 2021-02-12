let rectX = 0;
let rectWidth = 75;
function setup() {
  createCanvas(500, 500);
}

function draw () {
  background(155);
  drawShape();
  rectX++;
}

function mousePressed() {
  if ((mouseX >= rectX && mouseX <= 75) && (mouseY >= 0 && mouseY >= 0 && mouseY <= 75)) {
    console.log('hit');
  }
}

function drawShape() {
  fill('purple');
  rect(rectX, 0, rectWidth, 75);
}

//Create a new p5.js project.  In the setup function, create a 500 x 500 canvas. In the draw function, create a shape (square or ellipse) and use one of the methods described in either the p5.js example or the reading from the project to determine if the use has clicked on the shape. Use this event handler to increment a variable.

//After you have that working, create a variable to be used for either the shapes x or y.Increment this in the draw function so the shape appears to be moving.This should still detecting mouse clicks.

//After you have this working, create a conditional in your draw function to detect if the shape is off the canvas.When this occurs, call 'noLoop' to stop the draw function from repeating.Display the number of clicks the user has done.

//Feel free to make this interesting with adding color and description text.