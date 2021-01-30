
function setup () {
  createCanvas(820, 820);
  background("#ccc");
}

function draw () 
{ 
 

  // background
  background(51, 192, 255);

  // Snowman
 fill("#f1f1f1");
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
  ellipse(450, 300, 220, 220);
  //bottom
  strokeWeight(8);
  ellipse(450, 550, 350, 350);
  
  
  //horizon
  line(0, 725, 920, 725);
  strokeWeight(4);

  // stripe
  rect(30, 20, 500, 55);
  fill("red");

 

}

