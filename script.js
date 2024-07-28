const year = document.getElementById('year');
const hamburger = document.querySelector('.hamburger-nav-links');

            // copyritght year updater
year.textContent = new Date().getFullYear();

            // hamburger menu toggle
function hamburgerClick(){
    hamburger.style.display = 'flex'
}
function hideHamburger(){
     hamburger.style.display = 'none'
}