// Mobile menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
  const navList = document.querySelector('.nav-list');
  navList.classList.toggle('show');
});