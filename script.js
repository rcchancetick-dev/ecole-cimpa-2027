// Fond anime de formules mathematiques et symboles d'algorithmique
(function() {
  const canvas = document.getElementById('math-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const realSymbols = [
    '\u03A3', '\u222B', '\u03C0', '\u221E', '\u221A', '\u0394', '\u03A3', '\u03BB',
    'O(n log n)', 'O(n\u00B2)', 'f(x)', 'e=mc\u00B2', 'a\u00B2+b\u00B2=c\u00B2', 'lim',
    '\u03B8', '\u2200x\u2208\u211D', '\u2203y', 'P(A|B)', 'x\u207F+y\u207F', 'log\u2082(n)',
    '\u03C6', '\u03A9', '\u03BC', '\u2207', '{0,1}', 'if(x>0)', 'for i in n',
    'return', '\u21D2', 'GF(p)', '\u2211', '\u03B1\u03B2\u03B3'
  ];

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = [];
  const count = window.innerWidth < 640 ? 16 : 30;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      text: realSymbols[Math.floor(Math.random() * realSymbols.length)],
      size: 14 + Math.random() * 20,
      speedY: 0.15 + Math.random() * 0.3,
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: 0.08 + Math.random() * 0.14,
      drift: Math.random() * Math.PI * 2
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.y -= p.speedY;
      p.drift += 0.01;
      p.x += Math.sin(p.drift) * 0.3;

      if (p.y < -40) {
        p.y = canvas.height + 40;
        p.x = Math.random() * canvas.width;
      }

      ctx.font = `${p.size}px 'Poppins', sans-serif`;
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.fillText(p.text, p.x, p.y);
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
