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

//Exercise 3.3 
//You may have played with a ‘Spirograph’ as child—a mechanical device that allow you to create repetitive patterns with slight variations that created beautiful and interesting art.Alternatively, you may have cut snowflakes out of folded paper that allowed you to make a design with cuts that would magically transform in to a beautiful radial pattern.This assignment is to do the same.


//Create a function to draw one ‘arm’ of your radial design and then use`rotate` to rotate your canvas a specified amount and then redraw your arm.You will find the most interesting designs will change after a certain amount of applications(maybe after a full rotation…?).Using parameters, alter the ‘arm’ and then continue the process.And by all means, don’t think you have to only use a small portion of the canvas for each iteration.Experiment and see what looks best.

//Must have:
//Must be a radial design generated from multiple applications of a function.
//Must be parameterized with at least three parameters
//Must only ‘draw’ within your function.Nothing should be drawn outside of your repeated function.
//Should have:
//Should be error - free.I should not see any errors in the dev console.
//Should be clean, well commented code.
//Should have appropriately named parameters.
//Nice to have:
//Ability to interact with sketch as it processes.
//Ability to stop the draw loop.