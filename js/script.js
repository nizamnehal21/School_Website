// Hamburger menu
const toggleButton = document.querySelector('.menu-toggle');
const navbarLinks = document.querySelector('.navigation');

toggleButton.addEventListener('click', (e) => {
  e.preventDefault(); 
  navbarLinks.classList.toggle('active');
    navbarLinks.addEventListener('click', (e) => {
        navbarLinks.classList.remove('active');
    });
});
