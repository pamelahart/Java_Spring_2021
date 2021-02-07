function setup() {
  createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor) {
  translate(originX, originY);
  fill(primaryColor);
  rect(0, 0, 200, 200);
  noStroke();
  
   //All Tile Lines
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
  line(0, 70, 0, 200);
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
  circle(105, 100, 140);
  fill('#fad57e');
  circle(105, 100, 100);

}
function draw() {
  //Row 1
  createTile(0, 0, '#252d54');
  createTile(0, 200, '#1b618c');
  createTile(0, 200, '#252d54');
  fill('white');
  circle(105, 100, 0);

  //Row 2
  createTile(200, -400, '#1b618c');
  createTile(0, 200, '#252d54');
  createTile(0, 200, '#1b618c');
  //Row 3
  createTile(200, -400, '#252d54');
  createTile(0, 200, '#1b618c');
  createTile(0, 200, '#252d54');
}


//Exercise 3.2 
//Steps:
//Set up your exercise with a link to p5.js(the video used the cdn link(Links to an external site.)) and a link to your script file.
//Create your canvas to accommodate a grid of tiles.As an example, to create a canvas large enough for a 3 x3 grid(with the tile being 200 x 200) I made the canvas 600 x 600.
//Paste your function into you script.
//Convert the translate function to accept parameters
//Find attributes that you can convert to parameters(I used color, but you could use scale, angle, etc.).
//In your draw function call your function using your parameters.
//Fill the grid with variations of your tile.
//Things to consider:
//In the video, I used createTile a whole bunch of times in my draw function.Is there a way I could have used a loop to reduce the repetition ?

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