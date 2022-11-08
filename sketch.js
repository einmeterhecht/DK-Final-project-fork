const seedNature = 83527923
const seedNurture = 98524389
let ruleX = '';

function setup() {
  createCanvas(400, 800);
  noLoop();
  pixelDensity(0.5)
  background(19, 93, 14, 214)
  strokeCap(PROJECT)
  ruleX = generateRandomRuleX(seedNature)
  print(ruleX)
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