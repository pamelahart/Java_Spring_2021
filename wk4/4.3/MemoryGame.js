let rectX = 0;
const rectHeight = 300;
const rectWidth = 200;
let startingX = 200;
let startingY = 100;
let myRectangle = [];

function setup() {
  createCanvas(1500, 1500);
  background('#ffffcc'); 
  fill('#141b30');
  for (let rows = 0; rows < 3; rows++) {
    for (let columns = 0; columns < 4; columns++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myRectangle.push({ x: startingX, y: startingY });
      startingX += 225;
}
startingY +=325;
startingX = 200;
  }
  console.log(myRectangle);
}
