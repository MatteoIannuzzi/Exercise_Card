function toggleMenu() {
  const navList = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");

  navList.classList.toggle("open");
  navbar.classList.toggle("expanded");
}