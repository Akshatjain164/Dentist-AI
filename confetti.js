// Confetti effect for Dentist AI
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  // Set canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettiCount = 120;
  const confettiColors = ['#1089ff', '#fff', '#bee3ff', '#5ad1ff', '#ffd700', '#ff6f61'];
  const confetti = [];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height * 0.5,
      r: 6 + Math.random() * 6,
      d: 2 + Math.random() * 2,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngle: 0,
      tiltAngleIncrement: (Math.random() * 0.07) + 0.05
    });
  }

  let frame = 0;
  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.ellipse(c.x, c.y, c.r, c.r * 0.4, c.tilt, 0, 2 * Math.PI);
      ctx.fillStyle = c.color;
      ctx.globalAlpha = 0.85;
      ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  function updateConfetti() {
    confetti.forEach(c => {
      c.y += c.d + Math.sin(frame / 10);
      c.x += Math.sin(frame / 15) * 2;
      c.tilt += Math.sin(c.tiltAngle) * 0.7;
      c.tiltAngle += c.tiltAngleIncrement;
      if (c.y > canvas.height + 20) {
        c.y = Math.random() * -40;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  let animationFrame;
  function animate() {
    frame++;
    drawConfetti();
    updateConfetti();
    if (frame < 90) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
  animate();

  // Clean up on resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
} 
<canvas id="confetti-canvas"></canvas>