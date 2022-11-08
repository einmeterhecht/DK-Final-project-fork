function aquarellBrush(thickness, len) {
  strokeWeight(thickness)
  for (i = 0; i < len; i++) {
    strokeWeight(noise(i / 10) * thickness)
    stroke(0, 255 * noise(i + 3454))
    point(noise(i + 2334) * 2, i)
  }
}