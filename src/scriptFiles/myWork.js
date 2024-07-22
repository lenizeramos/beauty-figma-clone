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

  const services_label = document.getElementById("services_label");
  const classes_label = document.getElementById("classes_label");
  const services_form = document.getElementById("services_form");
  const classes_form = document.getElementById("classes_form");

  services_label.addEventListener("click", () => {
    services_label.classList.remove("blur");
    classes_label.classList.add("blur");
    classes_form.classList.add("display_none");
    services_form.classList.remove("display_none");
  });

  classes_label.addEventListener("click", () => {
    classes_label.classList.remove("blur");
    services_label.classList.add("blur");
    services_form.classList.add("display_none");
    classes_form.classList.remove("display_none");
  });

});
