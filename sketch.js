let seedNature = 124083202394
let seedNurture = 98524389

function setup() {
  createCanvas(400, 800);
  noLoop();
  pixelDensity(1)
  background(255)
  //branches()
  //endOfBranch = branches()
  //flower(posx, posy)
}

function draw() {
  drawBranches()
}

function keyPressed() {
  if (keyCode == 83) {
    save('Pinkcherrie.png')
  }
}