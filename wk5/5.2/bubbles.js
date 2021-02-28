let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
  print(bubble.x, bubble.y);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}
class Bubble {
  constructor () {
    this.x = 200;
    this.y = 150;
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
Use a for loop in the draw function to draw a number of instances of your class on the canvas. */
