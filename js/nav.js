const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
