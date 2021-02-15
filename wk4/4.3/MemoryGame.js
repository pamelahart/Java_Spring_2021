let startingY = 200;
let startingX = 300;
let myRectangle = [];
let startingId = 0;

function setup() {
  createCanvas(1000, 500);
  background (0);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
      rectangle(startingX, startingY)
      myRectangle.push({ x: startingX, y: startingY, id: startingId });
      startingX += 150;
      startingId++;
}
