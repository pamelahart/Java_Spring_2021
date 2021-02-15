let rectX = 0;
const rectHeight = 300;
let rectY;
const rectWidth = 200;
let startingX = 200;
let startingY = 100;
let myRectangle = [];

function setup() {
  createCanvas(1500, 1500);
  background('#141b30');
  fill('#495aa8');
  for (let rows = 0; rows < 3; rows++) {
    for (let cols = 0; cols < 4; cols++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myRectangle.push({ x: startingX, y: startingY });
      startingX += 225;
}
startingY +=325;
startingX = 200;
  }
  console.log(myRectangle);
}
