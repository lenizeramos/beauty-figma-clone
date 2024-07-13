document.addEventListener("DOMContentLoaded", () => {
  navbar = document.getElementById("navBar");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll >= 200) {
      navbar.classList.add("smallNavBar");
    } else {
      navbar.classList.remove("smallNavBar");
    }
  });
});
