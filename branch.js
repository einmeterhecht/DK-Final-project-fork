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

function generateRandomRuleX(seedNature) {
  let generatedNewRule = 'F[-]F[+]'; //insert random sentence at pos 3,7,9
  let inserts = ['', '', ''];
  randomSeed(seedNature);
  let c;
  let bracketCount = 0;
  let r = floor(random(1, 10))
  for (f = 0; f < 3; f++) {
    for (i = 0; i < r; i++) {
      c = grammar[floor(random(1, 10))]
      if (c == '[') {
        bracketCount += 1
      } else {
        inserts[f] += c
      }
    }
    for (j = 0; j < bracketCount; j++) {
      rp = random(inserts[f].length)
      pd = random(inserts[f].length - rp)
      inserts[f] = inserts[f].slice(0, rp) + '[' + inserts[f].slice(rp);
      inserts[f] = inserts[f].slice(0, rp + pd + 1) + ']' + inserts[f].slice(rp + pd + 1);
    }
  }
  generatedNewRule = generatedNewRule.slice(0, 3) + 'X' + inserts[0] + generatedNewRule.slice(3, 7) + 'X' + inserts[1] + generatedNewRule.slice(7, 10) + inserts[2]
  if (generatedNewRule.includes('[]')) {
    generatedNewRule.replace('[]', '')
  }
  return (generatedNewRule)
}

let grammar = {
  1: 'F',
  6: 'X',
  2: 'X',
  3: '+',
  4: '-',
  5: '[',
  7: 'X',
  8: 'X',
  9: 'F'
}

let rules = {
  'X': 'F[-X]F[+X]X[+X]X', //should be inserted by generateRandomRuleX
  'F': 'FF'
}


function mouseReleased() {
  sentence = generateSentence();
  console.log(sentence)
  draw()
}

let len = 3;
let ang = 17;


let drawRules = {
  'F': () => {
    line(0, 0, 0, -len + (random(-0.3 * len, 0.3 * len)))
    translate(0, -len + (random(-0.3 * len, 0.3 * len)))
    rotate(random(-PI / 120, PI / 120))
  },
  '+': () => {
    rotate(PI / 180 * ang)
    rotate(random(-PI / 20, PI / 20))
  },
  '-': () => {
    rotate(PI / 180 * (-ang))
    rotate(random(-PI / 20, PI / 20))
  },
  '[': () => {
    push()
  },
  ']': () => {
    pop()
    fill(255 + random(-50, 50), 64 + random(-50, 50), 155 + random(-50, 50))
    push()
    noStroke()
    let r = random(1)
    if (r < 0.01) {
      ellipse(0, -len, random(15, 30), random(15, 30))
    }
    pop()
  }
}

let iteration = 1;

function drawBranches() {
  push();
  strokeWeight(10 / (1.05 * iteration))
  translate(200, 700)
  for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) in drawRules) {
      drawRules[sentence.charAt(i)]()
    }
  }
  pop();
  iteration++
}