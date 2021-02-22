let cards = [];
const DOWN = 'down';
const UP = 'up';
let startingX = 55
let startingY = 175
const rectHeight = 300; // must remain the same throughout- can't be changed regardless
const rectWidth = 200;

function setup() {
  createCanvas(1000, 1200); // make title, instructions & score fit within the canvas
  background('#8ED8F8'); // ffffcc
  for (let rows = 0; rows < 3; rows++) { // varible (temp only available to this loop), condition (the true false statement. stops when the statement becomes false) , modifer ()... +=1 
    for (let columns = 0; columns < 4; columns++) {
      cards.push(new Card(startingX, startingY));
      startingX += 225;
    }
    startingY += 325;
    startingX = 50; 
  }
}
function mousePressed(){
  for (let k = 0; k < cards.length; k++) {
    if(cards[k].didHit(mouseX, mouseY)) {
    }
  } 
}

class Card {
  constructor(x, y ) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 300;
    this.face = DOWN;
    this.show();
  }

  show () {
    if(this.face === DOWN) {
      fill('#141b30');
        rect(this.x, this.y, this.width, this.height, 10);
    } else {
      fill('#aaa');
      rect(this.x, this.y, this.width, this.height, 10);
    }
  }
  didHit (mouseX, mouseY) {
    if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
      this.flip();  
      return true;
    } else {
      return false;
    }
  } 
  flip () {
    if (this.face === DOWN) {
        this.face = UP;
    } else {
      this.face = DOWN;
    }
    this.show();
  }
} 

