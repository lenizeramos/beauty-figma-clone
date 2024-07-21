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

  // BEGIN MESSAGE BUTTON
  const message_button = document.getElementById("message_button");
  const button_container = document.getElementById("button_container");

  message_button.addEventListener("click", () => {
    message_button.classList.add("display_none");
    button_container.classList.remove("display_none");
  });

  button_container.addEventListener("click", () => {
    button_container.classList.add("display_none");
    message_button.classList.remove("display_none");
  });
  // END MESSAGE BUTTON
});
