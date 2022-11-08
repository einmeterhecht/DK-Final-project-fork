let seedNature = 124083202394
let seedNurture = 98524389
let ruleX;

function setup() {
  createCanvas(400, 800);
  noLoop();
  pixelDensity(2)
  background(19, 93, 14, 214)
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