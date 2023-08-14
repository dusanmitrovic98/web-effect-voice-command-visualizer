const outerRing = document.querySelector(".outer-ring");
const innerWave = document.querySelector(".inner-wave");

function updateVisualizer(amplitude) {
  const dashOffset = 880 - amplitude * 800; // Adjust based on input
  outerRing.style.strokeDashoffset = dashOffset;
  innerWave.style.opacity = amplitude;
  innerWave.style.transform = `scale(${amplitude})`;
}

function simulateVoiceInput() {
  const maxAmplitude = 0.8; // Adjust this value based on input sensitivity
  const randomAmplitude = Math.random() * maxAmplitude;
  updateVisualizer(randomAmplitude);
}

setInterval(simulateVoiceInput, 500);
