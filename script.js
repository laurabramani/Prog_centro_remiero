// Get references to the nav button and curtain
const navBtn = document.querySelector('.nav-btn');
const navCurtain = document.querySelector('.nav-curtain');

// Toggle the 'open' class on the curtain when the nav button is clicked
navBtn.addEventListener('click', function() {
  navCurtain.classList.toggle('open');
});