const tabButtons = document.querySelectorAll('[data-mission-tab]');
const heading = document.querySelector('.mission-tabs__heading');
const body = document.querySelector('.mission-tabs__body');
const cta = document.querySelector('.mission-tabs__cta');

tabButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabButtons.forEach((b) => b.classList.toggle('is-active', b === btn));
    if (heading) heading.textContent = btn.getAttribute('data-heading');
    if (body) body.textContent = btn.getAttribute('data-body');
    if (cta) {
      cta.textContent = btn.getAttribute('data-link-text');
      cta.setAttribute('href', btn.getAttribute('data-link-href'));
    }
  });
});
