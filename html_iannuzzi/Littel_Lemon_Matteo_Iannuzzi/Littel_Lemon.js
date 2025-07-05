// This function toggles the visibility of the navigation menu on mobile devices
function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");

  navList.classList.toggle("open");
  navbar.classList.toggle("expanded");
}