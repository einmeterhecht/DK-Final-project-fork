let sentence = 'X'

function generateSentence() {
  let nextSentence = ''
  for (i = 0; i < sentence.length; i++) {
    let current = sentence.charAt(i)
    if (current in rules) {
      nextSentence += rules[current]
    } else {
      nextSentence += current
    }
    sentence[i] = current
  }
  return (nextSentence)
}

function generateRandomRuleX() {
  let generatedNewRule = '';
  randomSeed(seedNature);
  let c;
  let bracketCount = 0;
  let r = floor(random(10, 30))
  for (i = 0; i < r; i++) {
    c = grammar[floor(random(1, 6))]
    if (c == '[') {
      bracketCount += 1
    } else {
      generatedNewRule += c
    }
  }
  for (j = 0; j < bracketCount; j++) {
    rp = random(generatedNewRule.length)
    pd = random(generatedNewRule.length - rp)
    generatedNewRule = generatedNewRule.slice(0, rp) + '[' + generatedNewRule.slice(rp);
    generatedNewRule = generatedNewRule.slice(0, rp + pd) + ']' + generatedNewRule.slice(rp + pd);
  }
  return (generatedNewRule)
}

let rules = {
  'X': 'F[-XX[]+][+XX[X]-][X[]]X',
  'F': 'FF'
}

let grammar = {
  1: 'F',
  2: 'X',
  3: '+',
  4: '-',
  5: '[',
  6: ']'
}

function mouseReleased() {
  sentence = generateSentence();
  console.log(sentence)
  draw()
}

let len = 50;
let ang = 25;

let drawRules = {
  'F': () => {
    line(0, 0, 0, -len)
    translate(0, -len)
  },
  '+': () => {
    rotate(PI / 180 * ang)
    //rotate(random(-PI / 8, PI / 8))
  },
  '-': () => {
    rotate(PI / 180 * (-ang))
    //rotate(random(-PI / 8, PI / 8))
  },
  '[': () => {
    push()
  },
  ']': () => {
    pop()
    fill(255 + random(-50, 50), 64 + random(-50, 50), 155 + random(-50, 50))
    push()
    noStroke()
    let r = random()
    if (r < 0.1) {
      ellipse(0, -len, random(8), random(8))
    }
    pop()
  }
}

function drawBranches() {
  push();
  translate(200, 800)
  for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) in drawRules) {
      drawRules[sentence.charAt(i)]()
    }
  }
  pop();
  len = len * 0.6
}