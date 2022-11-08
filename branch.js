let sentence = 'X'

function generateSentence() { //generates a new sentence based on the rules
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

function generateRandomRuleX(seedNature) { //generates a rule
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

let grammar = { //the grammar from which the rule can be composed from, added some letters more for higher chances to be picked
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
  'X': 'F[-XXXF+XX+][+X[FFX+[X]]]A[[+FA][+X-F]]XA', //should be inserted from generateRandomRuleX
  'F': 'FF'
}


function mouseReleased() {
  sentence = generateSentence();
  console.log(sentence)
  draw()
}

let len = 5;
let ang = 3;


let drawRules = {
  'F': () => {
    stroke(0, 0, 0, 0.5)
    rotate(random(-PI / 120, PI / 120))
    line(0, 0, 0, -len + (random(-0.3 * len, 0.3 * len)))
    translate(0, -len + (random(0, 0.3 * len)))
  },
  '+': () => {
    rotate(PI / 180 * ang)
    rotate(random(PI / 180 * (ang * 0.3), -PI / 180 * (ang * 0.3)))
    stroke
  },
  '-': () => {
    rotate(PI / 180 * (-ang))
    rotate(random(PI / 180 * (ang * 0.3), -PI / 180 * (ang * 0.3)))
  },
  '[': () => {
    push()
  },
  ']': () => {
    pop()
    fill(255 + random(-50, 50), 64 + random(-50, 50), 155 + random(-50, 50))
  },
  'A': () => {
    push()
    let r = random(1)
    if (r < 0.01) {
      ellipse(0, -len, random(5, 15), random(5, 15))
    }
    pop()
  },
  'B': () => {
    fruit()
  },
  'C': () => {
    leave()
  }
}

let iteration = 1;

function drawBranches() {
  push();
  strokeWeight(10 / (1.30 * iteration))
  ang = ang + (((iteration) ^ 2) / 5)
  translate(400, 700)
  for (i = 0; i < sentence.length; i++) {
    if (sentence.charAt(i) in drawRules) {
      drawRules[sentence.charAt(i)]()
    }
  }
  pop();
  iteration++
}