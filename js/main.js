const navCloseEl = document.querySelector('.nav__close');
const navList = document.querySelector('.nav__list');
const navIconEl = document.querySelector('.nav__icon');
const navBgOverlayEl = document.querySelector('.nav__bgOverlay');

const navOpen = () => {
  navList.classList.add('show');
  navBgOverlayEl.classList.add('active');
  document.body.style = 'height: 100vh; overflow: hidden;';
}

const navClose = () => {
  navList.classList.remove('show');
  navBgOverlayEl.classList.remove('active');
  document.body.style = 'height: initial; overflow: visible;';
}

navIconEl.addEventListener('click', navOpen);
navCloseEl.addEventListener('click', navClose);
navBgOverlayEl.addEventListener('click', navClose);

// Close the navigation on small screens when a link is clicked
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      navClose();
    }
  });
});

// Close the navigation on window resize if it's open
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navClose();
  }
});