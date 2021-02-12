let rotateBy = 5;
function setup() {
  createCanvas(600, 600);
  background(0);
  angleMode(DEGREES);
}
function makeArm(rotateBy) {
  let alt = Math.round(rotateBy / 360);
  noFill();
  stroke(255, 0, 0);
  strokeWeight(1);
  bezier(alt - 10, alt + 10, 10, 10, 10, 90, 50, 80);
}

  function makeArm2(rotateBy) {
    let alt = Math.round(rotateBy / 300);
    stroke(0, 0, 255);
    strokeWeight(2);
    ellipse(150, 150, 150 / alt);

}
function draw() {
  translate(300, 300);
  rotate(rotateBy)
  makeArm(rotateBy);
  rotateBy += 5;
}
function mousePressed() {
    noLoop();
   let s = second()
   if (s = 5){ 

   }
   else {
    makeArm2
   }
  }
    
  
  
  //red stops

//function mouseReleased(fxn){
// makeArm2(rotateBy + 5) //starts blue

//}

//Exercise 4.1
//Create a new html document.Place an empty div with an id of "myEmptyDiv" inside the body tag.Use DOM selectors to:

//Create a new headline element(h1 through h5 would work just fine).The text can be anything about llamas.
//Append the new headline element to "myEmptyDiv".
//And an event listener to your headline to change the background color of the whole window when the headline is clicked.