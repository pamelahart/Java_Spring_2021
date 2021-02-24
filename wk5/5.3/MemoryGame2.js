const DOWN = 'down';
const UP = 'up';
let startingX = 55;
let startingY = 175;
let cards = [];
const gameState = {
  totalPairs: 6,
  flippedCards: [],
  numMatched: 0,
  attempts: 0,
  waiting: false,
  title: "Bonsai Memory Game",
  titleTextSize: 40,
  instruct: "Find your Zen. Match the Bonsai trees.",
  instructTextSize: 18,
};

let cardback;
function preload() {
  cardback = loadImage('images/card_FRONT.png');
  cardfaceArray = [
    loadImage('images/card_BALANCE.png'),
    loadImage('images/card_FREEDOM.png'),
    loadImage('images/card_GOOD HEALTH.png'),
    loadImage('images/card_HAPPINESS.png'),
    loadImage('images/card_WISDOM.png'),
    loadImage('images/card_STRENGTH.png'),
  ]
}

function setup() {
  createCanvas(1000, 1200); // make title, instructions & score fit within the canvas
  background('#8ED8F8');
  let selectedFaces = [];
  for (let z = 0; z < 6; z++) {
    const randomIdx = floor(random(cardfaceArray.length));
    const face = cardfaceArray[randomIdx];
    selectedFaces.push(face);
    selectedFaces.push(face);
    // remove the used cardface so it doesnt get randomly selected again
    cardfaceArray.splice(randomIdx, 1);
  }

  selectedFaces = shuffleArray(selectedFaces);
  for (let rows = 0; rows < 3; rows++) { // varible (temp only available to this loop), condition (the true false statement. stops when the statement becomes false) , modifer ()... +=1 
    for (let columns = 0; columns < 4; columns++) {
      const faceImage = selectedFaces.pop();
      cards.push(new Card(startingX, startingY, faceImage));
      startingX += 225;
    }
    startingY += 325;
    startingX = 50; 
  }
}
function draw () {
  background('#8ED8F8');
  if(gameState.numMatched === gameState.totalPairs) {
  fill('#141b30');
  textSize(55);
  text('You are a Zen Master!', 175, 1175);
  noLoop();
}
  for (let k = 0; k < cards.length; k++) {
      if (!cards[k].isMatch) {
      cards[k].face = DOWN;
   }
   cards [k].show(); 
  }
  noLoop();
  gameState.flippedCards.length = 0;
  gameState.waiting = false;
  fill('#141b30');
  textSize(gameState.titleTextSize);
  text(gameState.title, 280, 65);
  textSize(30);
  text('Attempts ' + gameState.attempts, 50, 150);
  noLoop();
  text('Matches ' + gameState.numMatched, 280, 150);
  noLoop();
  textSize(gameState.instructTextSize);
  text(gameState.instruct, 310,95);
  
  
}

function mousePressed(){
  
  if (gameState.waiting) {
    return;
  }
  for (let k = 0; k < cards.length; k++) {
    // first check flipped cards & then trigger next flip

    if (gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)){
      gameState.flippedCards.push(cards[k]);
    }
  }
  if (gameState.flippedCards.length === 2) {
  gameState.attempts ++;

    if (gameState.flippedCards[0].cardFaceImg=== gameState.flippedCards[1].cardFaceImg){
      
      // Cards match- add to score
      //mark cards as flipped so they dont flip back
      gameState.flippedCards[0].isMatch =true;
      gameState.flippedCards[1].isMatch = true;
      //empty flipped array
      gameState.flippedCards.length = 0;
      //increment the score
      gameState.numMatched++;
      loop();

    } else {
        gameState.waiting = true;
        const loopTimeout = window.setTimeout(() => {
          loop();
          window.clearTimeout(loopTimeout);
        }, 1000)
        //statement to change attempt number, also need match number w/out overwriting
    }
  } 
}
class Card {
  constructor(x, y, cardFaceImg) {
    this.x = x;
    this.y = y;
    this.width = 200;
    this.height = 300;
    this.face = DOWN;
    this.cardFaceImg = cardFaceImg;
    this.isMatch = false;
    this.show();
  }

  show () {
    if(this.face === UP || this.isMatch) {
      fill('#aaa');
      rect(this.x, this.y, this.width, this.height, 10);
      image(this.cardFaceImg, this.x, this.y);
    
      } else {
      fill('#141b30');
      rect(this.x, this.y, this.width, this.height, 10);
      image(cardback, this.x, this.y);
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
  function shuffleArray (array) {
  let counter = array.length;
  while (counter >  0) {
    // Pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter --;
    // swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
  }
    return array;
  }

