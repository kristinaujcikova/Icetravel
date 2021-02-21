//Navigation uncheck
// Select DOM items
const navLink = document.querySelectorAll('.navigation__item'); // nav item class
const checkbox = document.querySelector('.navigation__checkbox'); //checkbox class
     
// Add Event Listener to every nav link
for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener('click', checkboxOff);
}
     
// Uncheck checkbox
function checkboxOff() {
  checkbox.checked = false;
}
