function setup() {
  createCanvas(200, 200);
}
function createTile() {
  translate(0,0);
  fill('#1b618c');
  rect(0, 0, 200, 200);
  noStroke();
  
  stroke('white');
  strokeWeight(3);

  //MAIN Middle Set
  line(0, 0, 200, 200);
  strokeWeight(3);
  line(20, 0, 200, 200);
  strokeWeight(2.5);
  line(30, 0, 200, 200);
  strokeWeight(2);
  line(40, 0, 200, 200);
  strokeWeight(1);
  line(50, 0, 200, 200);

  //Far left side
  line(0, 30, 200, 200);
  strokeWeight(2.5);
  line(0, 20, 200, 200);
  strokeWeight(2.5);
  line(0, 70, 00, 200);
  strokeWeight(2.5);
  line(0, 60, 200, 200);
  strokeWeight(2);
  line(0, 50, 200, 200);
  strokeWeight(1);
  line(0, 40, 200, 200);
  
 //Far Right Side
  line(120, 0, 200, 200);
  strokeWeight(2.5);
  line(130, 0, 200, 200);
  strokeWeight(2);
  line(140, 0, 200, 200);
  strokeWeight(1);
  line(150, 0, 200, 200);

  //Far Bottom Left Side
  line(0, 130, 200, 200);
  strokeWeight(2.5);
  line(0, 140, 200, 200);
  strokeWeight(2);
  line(0, 150, 200, 200);
  strokeWeight(1);
  line(0, 160, 200, 200);

  //Circles
  fill('#f3ae0b');
  circle(105, 100, 140)
  fill('#fad57e');
  circle(105, 100, 100)
  
}

function draw() {
  noLoop()
  createTile();
}



//Exercise 3.1 Create a function tile
//Description:
//You will demonstrate your understanding of functions creating a function to make a ‘tile’ for creating patterns.To provide additional constraints, your tile should measure 200px by 200px.Set your canvas to 200px by 200px so we see only one iteration.

//Steps:
//Use a square shape as the background color — don’t use your background.All other shapes should be on top of that square.
//Use good design so that this single pattern tile looks visually pleasing on its own.As you’re design it, think about what modifications to size, color, or position may lead to interesting other tiles.This will come into play in the next exercise.
//Wrap your entire ‘drawing’ with a function, so that you would have blank canvas unless you called your function.Call your pattern function in the draw function.Use the noLoop method to stop the draw loop.


//Resources
//p5.dom.js library
//CDN
//Copy and paste this into your html
// < script src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/addons/p5.dom.min.js" ></script >

//or

//Copy and paste content ofthe gist below to locate this library along - side your other scripts
//https://gist.github.com/ken-teaches-web/2618d352c71a9019b070d0f272790afb (Links to an external site.)

//Using google fonts for rendering text()
//https://github.com/processing/p5.js/wiki/Drawing-Text-Using-Web-Fonts