let ellipse1 = prompt("enter a basic color name in lower case", "green");
let ellipse2 = prompt("enter another basic color name in lower case", "red");

function setup () {
  createCanvas(820, 820);
  background(255, 204, 0);
}

function draw () {
  background(51, 192, 255);
  
  
  // Snowman
 
  //arms
  strokeWeight(16);
  line(400, 300, 200, 200); 
  line(700, 200, 500, 300); 
  //head
  strokeWeight(4);
  ellipse(450, 150, 120, 120);
  //eyes
  stroke(0);
  strokeWeight(20);
  point(425, 130);
  point(475, 130);
  //mouth
  strokeWeight(10);
  arc(430, 157, 90, 40, 0, HALF_PI);
  //nose
  point(450, 150);
  
  //middle
  strokeWeight(6);
  ellipse (ellipse1);(450, 300, 220, 220);
  //bottom
  strokeWeight(8);
  ellipse (ellipse2);(450, 550, 350, 350);
  
  
  //horizon
  line(0, 720, 920, 720);
  strokeWeight(4);
 

  // background


}

