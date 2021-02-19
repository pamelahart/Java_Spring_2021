let rectX = 0; // let statements can be changed by a function or reassignment 
const rectHeight = 300; // must remain the same throughout- can't be changed regardless
const rectWidth = 200;
let startingX = 50;
let startingY = 50;
let myRectangle = [];

function setup() {
  createCanvas(1000, 1000); // make smaller

  background('#ffffcc'); 
  fill('#141b30');
  for (let rows = 0; rows < 3; rows++) { // varible (temp only available to this loop), condition (the true false statement. stops when the statement becomes false) , modifer ()... +=1 
    for (let columns = 0; columns < 4; columns++) {
      rect(startingX, startingY, rectWidth, rectHeight);
      myRectangle.push({ x: startingX, y: startingY });
      startingX += 225;
}
startingY +=325;
startingX = 50;
  }
  console.log(myRectangle);
}
