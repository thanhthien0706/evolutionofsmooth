const header = document.querySelector('.site-header');

if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('site-header--scrolled', window.scrollY > 20);
  }, { passive: true });
}

const burger = document.querySelector('.site-header__burger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavClose = document.querySelector('.mobile-nav__close');
const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');

function closeMobileNav() {
  document.body.classList.remove('nav-open');
}

if (burger && mobileNav) {
  burger.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });
}

if (mobileNavClose) {
  mobileNavClose.addEventListener('click', closeMobileNav);
}

if (mobileNavBackdrop) {
  mobileNavBackdrop.addEventListener('click', closeMobileNav);
}

document.querySelectorAll('.mobile-nav__link').forEach((link) => {
  link.addEventListener('click', closeMobileNav);
});
