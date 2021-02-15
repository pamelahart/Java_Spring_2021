let startingY = 100;
let myRectangles = [];
let startingId = 0;

function setup() {
  createCanvas(1000, 500);
  background (0);
  for (let k = 0; k < 2; k++) {
    for (let i = 0; i < 4; i++) {
      rectangle(startingX, startingY)
      myRectangles.push({ x: startingX, y: startingY, id: startingId });
      startingX += 150;
      startingId++;
}
  startingY += 150;
  startingX = 200;

function draw () {
  background();

}

//Description:
//This week and next week we'll be working on a memory game. The point of this game is to match up pairs of cards that have either the same or linked images. Since we'll be doing this over two weeks, we'll by planning out the images and interface.

//Requirements:
//Must haves:
//Preparatory elements and tasks:

//Decide on number of 'cards'.Should be an even number that would look good as a grid.I would recommend 20 or less.
//Determine the size of the card.
//Divide the number of cards in half and find images to be used with those cards.These should be be all the same size and fit inside the shape of the card.These should ultimately be some web - compatible format(gif, png, jpg)
//Create a card back that can be used with our cards.This can be an image or a combination of shapes in p5.This should also be small enough to within  the card.
//Create a sketch of how the cards will be layed out as well as where the score tally will be.
//Beginning the P5 project

//Create a grid of cards shapes(don't worry about putting the images for the front or the back in the shape yet).
//A demonstration of how to do this was presented at the end of the Tuesday face - to - face meeting - I do it with circles but it would be easy to convert to rectangles.
//Code from demo can be found here: https://github.com/ken-teaches-web/programming-for-web-spring20/blob/master/week4/tuesday-demo/tuesdaydemo.js#L22-L42 (Links to an external site.)
//Push your grid to your github repo and upload your html and js files to your MCAD server.

//Turn in:
//Attach a scan or picture of your layout sketch.
//Attach a screenshot of your card back.
//Include a link to your uploaded grid and your github repo.