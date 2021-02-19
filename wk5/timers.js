let blockX = 0;
let blockY = 0;
let drawTimer; 
let speed = 50;

function setup () {
    createCanvas(500, 500);
    background(0);

}

function drawBlock(x, y, color) {
    fill(color || 255);
    rect(x, y, 50, 50);
}

drawTimer = window.setInterval(() => {
    drawBlock(blockX, blockY, 255);
}, speed);