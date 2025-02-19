function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.querySelector('header').appendChild(particle);
    setTimeout(() => particle.remove(), 5000);
}

setInterval(createParticle, 200);
