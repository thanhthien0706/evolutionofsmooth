const posts = [
  'assets/images/social/bottles_trio.jpg',
  'assets/images/social/cashmere_butter_woman.jpg',
  'assets/images/social/shave_gel_woman.jpg',
  'assets/images/social/cake_goodenough.jpg',
  'assets/images/social/monistat.jpg',
  'assets/images/social/pinkwall.jpg',
  'assets/images/social/pinkdome.jpg',
  'assets/images/social/creme_treats.jpg',
  'assets/images/social/skincare_application.jpg',
  'assets/images/social/shave_gel_hand.jpg',
];

const grid = document.getElementById('social-grid');

if (grid) {
  posts.forEach((src) => {
    const tile = document.createElement('a');
    tile.className = 'social-proof__tile';
    tile.href = 'https://www.instagram.com/eosproducts';
    tile.target = '_blank';
    tile.rel = 'noopener';
    tile.innerHTML = `<img src="${src}" alt="eos community post" loading="lazy"><span>Learn More</span>`;
    grid.appendChild(tile);
  });
}

const prevBtn = document.querySelector('.social-proof__arrow--prev');
const nextBtn = document.querySelector('.social-proof__arrow--next');

if (prevBtn && nextBtn && grid) {
  const scrollByTile = (direction) => {
    const tileWidth = grid.querySelector('.social-proof__tile')?.getBoundingClientRect().width || grid.clientWidth / 5;
    grid.scrollBy({ left: direction * tileWidth, behavior: 'smooth' });
  };
  prevBtn.addEventListener('click', () => scrollByTile(-1));
  nextBtn.addEventListener('click', () => scrollByTile(1));
}
