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
  //middle
  strokeWeight(6);
  ellipse(450, 300, 220, 220);
  //bottom
  strokeWeight(8);
  ellipse(450, 550, 350, 350);
  
  //horizon
  line(0, 720, 920, 720);
  strokeWeight(4);
 

  // background


}

