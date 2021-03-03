let bubble1;
let bubble2;
let bubble3;
let number = 0;
let bubbleArray=[];

function setup() {
  createCanvas(600, 400);
  for (let loopVar=0; loopVar<5; loopVar++){ // loops start w/ for, need 3 sets, no spaces , + = # to increase more
  let bubbs = new Bubble(); // this is an instance,  together
  bubbleArray.push(bubbs) // this is the function of adding a new bubble to the array until there are 5
  }
}
function draw() {
  background(0);
  for (let loopVar = 0; loopVar < 5; loopVar++) {
    bubbleArray[loopVar].move();
    bubbleArray[loopVar].show();
    
  }
}
class Bubble {
  constructor () {
    this.x = 200;
    this.y = 150;
  }
  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
}

/* Start a new p5.js project.
Object Orientated - encapsolate it into something to describe it - template, blueprint

Class = a bubble
     The bubble has properties which is defined by data (encapsulate)
     Once all the properties are defined, the bubble can be drawn
     Once the bubble is drawn based on properties, the bubble can function...
     If your head didnt have ears, eyes & a nose, you couldn't hear,see or smell
     objects have functions. define the object, then define its functions
    intances = functions of the object
    //
    SETUP = constructor
    a constructor is a function
    "new" is used in the setup to construct your object

    by definition then once a Class is declared & because it is a function, functions such as movement can be put into the class... once you do this in order for the class to carry out the function, you MUST put in the word "this"- it is a distinct variable which allows you to call it out  - think of it in Adobe terms of defining your Paragraph style and adding a character style within that particular Paragraph style - USE THIS AT ALL TIMES!

Create a simple outline shape.
Convert it to a class.
In the constructor, set the shape's x and y coordinates as class properties (a variable that is specific to the class).
Create a method(a class- specific function)  that renders the shape with the class properties (probably something like this.x andn this.y—you may also want to use class properties with width and height).
Create a method that gives the shape some sort of movement.
Use a for loop in the draw function to draw a number of instances of your class on the canvas.

For Loops
To write a for loop, first type the for keyword, and then in parentheses () provide three things:

Declare a variable to keep track of your pattern, and initialize it to the number your pattern starts at: let lineX = 75;
Write a test that evaluates to a boolean value of false whenever the pattern should stop: lineX <= 225;
Reassign the variable so that it follows the pattern: lineX = lineX + 75; (which can be shortened to lineX += 75)
Then inside curly brackets {}, write the code that uses your variable to follow the pattern. Putting it all together, it looks like this:
 */
