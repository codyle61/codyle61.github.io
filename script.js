trX = 300;
trY = 300;
let angleX = 0;
let h = 0;
let k = 0;
let i = 0;
let i2 = 0;

function setup() {
  createCanvas(displayWidth,displayHeight)
  noStroke();
}

function draw() {
  h = 0;
  k = height / 3 ;
  height = width / 3;
  background(204);
  for (i2 = 0; i2 <= 3; i2 ++) {
    for (i = 0; i < 6; i++) {
      text('Hello Mr. H!', trX + h, trY + k)
      h += width / 6
    }
    h = 0;
    k += height / 3
  }

  push();
  fill('green');
  rectMode(CENTER);
  pop();
  angleX += 0.02;
  
  trX=90*cos(angleX) + 1;
  trY=90*sin(angleX) + 1;
  
}
