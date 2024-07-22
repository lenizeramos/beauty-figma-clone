document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("mainLogo");
  const openTag = document.getElementById("opentagSB");
  const closeTag = document.getElementById("closetagSB");
  const sidebar = document.getElementById("sidebar");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll >= 10) {
      navbar.classList.add("smallNavBar");
      logo.src = "../resources/landing/ShrinkedLogo_Navbar.svg";
    } else {
      navbar.classList.remove("smallNavBar");
      logo.src = "../resources/landing/CarlaBeautyLogo.svg";
    }
  });

  openTag.addEventListener("click", () => {
    // console.log("clicked");
    sidebar.style.display = "flex";
  });
  closeTag.addEventListener("click", () => {
    // console.log("clicked");
    sidebar.style.display = "none";
  });

});
