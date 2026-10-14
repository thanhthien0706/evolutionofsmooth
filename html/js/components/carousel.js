function initCarousel(root) {
  const track = root.querySelector('[data-carousel-track]');
  const slides = [...root.querySelectorAll('[data-carousel-slide]')];
  const dots = [...root.querySelectorAll('[data-carousel-dot]')];
  if (!track || slides.length <= 1) return;

  let index = 0;
  let timer;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, dIdx) => dot.classList.toggle('is-active', dIdx === index));
  }

  function next() { goTo(index + 1); }

  function startAuto() {
    timer = setInterval(next, 5000);
  }

  function stopAuto() {
    clearInterval(timer);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); stopAuto(); startAuto(); });
  });

  root.addEventListener('mouseenter', stopAuto);
  root.addEventListener('mouseleave', startAuto);

  goTo(0);
  startAuto();
}

document.querySelectorAll('[data-carousel]').forEach(initCarousel);
