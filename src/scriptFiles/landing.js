document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const openTag = document.getElementById("opentagSB");
  const closeTag = document.getElementById("closetagSB");
  const sidebar = document.getElementById("sidebar");

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll >= 50) {
      navbar.classList.add("smallNavBar");
    } else {
      navbar.classList.remove("smallNavBar");
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

  // const openSidebarButton = document.getElementById("openSidebar");
  // const sidebar = document.getElementById("sidebar");

  // openSidebar.addEventListener("click", (event) => {
  //   // console.log('clicked')
  //   sidebar.classList.add("open");
  // });

  // document.addEventListener("click", (event) => {
  //   if (
  //     !sidebar.contains(event.target) &&
  //     !openSidebarButton.contains(event.target)
  //   ) {
  //     // console.log('OUTSIDE click')
  //     sidebar.classList.remove("open");
  //   }
  // });

  const weddCheck = document.getElementById("wedd-opt");
  const partyCheck = document.getElementById("party-opt");
  const photoCheck = document.getElementById("photo-opt");
  const wedding = document.getElementById("wedd-check");
  const party = document.getElementById("party-check");
  const photo = document.getElementById("photo-check");

  weddCheck.addEventListener("click", () => {
    wedding.classList.toggle("hide");
  });

  partyCheck.addEventListener("click", () => {
    party.classList.toggle("hide");
  });

  photoCheck.addEventListener("click", () => {
    photo.classList.toggle("hide");
  });

  const callOpt = document.getElementById("call");
  const whatsaapOpt = document.getElementById("whatsapp");
  const smsOpt = document.getElementById("sms");
  const emailOpt = document.getElementById("email");
  const call = document.getElementById("call-check");
  const whats = document.getElementById("whats-check");
  const sms = document.getElementById("sms-check");
  const email = document.getElementById("email-check");

  callOpt.addEventListener("click", () => {
    call.classList.toggle("hide");
  });

  whatsaapOpt.addEventListener("click", () => {
    whats.classList.toggle("hide");
  });

  smsOpt.addEventListener("click", () => {
    sms.classList.toggle("hide");
  });

  emailOpt.addEventListener("click", () => {
    email.classList.toggle("hide");
  });
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

// BEGIN LETS TALK
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
// END LETS TALK
