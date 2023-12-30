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



var form = document.getElementById("contact");
async function handleSubmit(event) {
event.preventDefault();
var status = document.getElementById("my-form-status");
var data = new FormData(event.target);
fetch(event.target.action, {
  method: form.method,
  body: data,
  headers: {
    'Accept': 'application/json'
}
}).then(response => {
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
    form.reset()
  } 
}).catch(error => {
  status.innerHTML = "Oops! There was a problem submitting your form"
});
}
form.addEventListener("submit", handleSubmit)