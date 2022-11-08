const seedNature = 100050471372353 //facebook ID --> much easier to retrieve than google
let seedNurture;
let ruleX = '';
let results;

function setup() {
  createCanvas(800, 800);
  noLoop();
  colorMode(HSB)
  pixelDensity(4)
  background(235, 50, 70, 100)
  strokeCap(PROJECT)
  ruleX = generateRandomRuleX(seedNature)
  print(ruleX)
  nurture()
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


async function nurture() {
  let obj;

  const res = await fetch('http://api.ipify.org/?format=json')

  obj = await res.json();

  console.log(obj)
}