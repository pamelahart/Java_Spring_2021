let rectX = 0;
const rectHeight = 200;
const rectWidth = 100
let startingY = 200;
let startingX = 100;
let myRectangle = [];

function setup() {
  createCanvas(1000, 1500);
  background (0);
  for (let rows = 0; rows < 4; rows++) {
    for (let columns = 0; columns < 4; columns++) {
      rect(startingX, startingY)
      myRectangle.push({ x: startingX, y: startingY });
      startingX += 150;
}
startingY +=325;
startingX = 200;
  }
  console.log(myRectangle);
}
