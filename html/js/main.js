const animatedEls = document.querySelectorAll('[data-animate]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
animatedEls.forEach((el) => observer.observe(el));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.btn, .product-card__atc').forEach((btn) => {
  if (btn.tagName === 'BUTTON' && btn.textContent.trim().toLowerCase() === 'add to cart') {
    btn.addEventListener('click', () => {
      const original = btn.textContent;
      btn.textContent = 'added ✓';
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  }
});
