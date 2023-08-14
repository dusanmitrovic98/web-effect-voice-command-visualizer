const outerRing = document.querySelector(".outer-ring");
const innerWave = document.querySelector(".inner-wave");

function updateVisualizer(amplitude) {
  const dashOffset = 880 - amplitude * 800; // Adjust based on input
  outerRing.style.strokeDashoffset = dashOffset;
