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

function mouseReleased() {
  sentence = generateSentence();
  console.log(sentence)
}