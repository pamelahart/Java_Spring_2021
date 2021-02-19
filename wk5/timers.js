function setup () {
createCanvas(500, 500);
background(0);
drawBlock();
}

function drawBlock(x, y, color) {
fill(color || 255);
rect(x, y, 50, 50);

}