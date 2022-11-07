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

let rules = {
  'X': 'F+[[X]-X]-F[-FX]+X',
  'F': 'FF'
}

function generateRandomRuleX() {
  let generatedNewRule = '';
  randomSeed(seedNature);
  let r = floor(random(10))
  for (i = 0; i < r; i++) {
    generatedNewRule += grammar[floor(random(1, 6))]
  }
  return (generatedNewRule)
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

let len = 1;
let ang = 25

let drawRules = {
  'F': () => {
    line(0, 0, 0, -len)
    translate(0, -len)
  },
  '+': () => {
    rotate(PI / 180 * ang)
    rotate(random(-PI / 8, PI / 8))
  },
  '-': () => {
    rotate(PI / 180 * (-ang))
    rotate(random(-PI / 8, PI / 8))
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
  translate(100, 800)
  for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) in drawRules) {
      drawRules[sentence.charAt(i)]()
    }
  }
  pop();
}