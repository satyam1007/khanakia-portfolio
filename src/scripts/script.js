const menuBtn = document.getElementById('menu-toggle')
menuBtn.addEventListener('click', () => {
  let navLinks = document.getElementById('nav-links');
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove('hidden')
  } else {
    navLinks.classList.add('hidden')
  }
})