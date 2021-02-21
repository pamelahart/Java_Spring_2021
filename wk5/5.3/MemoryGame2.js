let rectX = 0; // let statements can be changed by a function or reassignment 
const rectHeight = 300; // must remain the same throughout- can't be changed regardless
const rectWidth = 200;
let startingX = 55;
let startingY = 175;
let myRectangle = [];
let myCard;

function setup() {
  createCanvas(1000, 1200); // make title, instructions & score fit within the canvas
  background('#8ED8F8'); // ffffcc
  let myCard = new Card();
  
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
function mousePressed(){
  myCard.didHit(mouseX, mouseY);
}

class Card {
  constructor() {
    this.x = 100;
    this.y = 100;
    this.width = 80;
    this.height = 100;
    this.show();
  }
  show () {
    fill('ffffcc');
    rect(this.x, this.y, this.width, this.height, 10);
  }
}