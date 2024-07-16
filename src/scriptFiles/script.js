document.addEventListener("DOMContentLoaded", () => {
  const openSidebarButton = document.getElementById("openSidebar");
  const sidebar = document.getElementById("sidebar");

  openSidebar.addEventListener("click", (event) => {
    // console.log('clicked')
    sidebar.classList.add("open");
  });

  document.addEventListener("click", (event) => {
    if (
      !sidebar.contains(event.target) &&
      !openSidebarButton.contains(event.target)
    ) {
      // console.log('OUTSIDE click')
      sidebar.classList.remove("open");
    }
  });
});

const weddCheck = document.getElementById("wedd-opt");
const partyCheck = document.getElementById("party-opt");
const photoCheck = document.getElementById("photo-opt");
const wedding = document.getElementById("wedd-check")
const party = document.getElementById("party-check")
const photo = document.getElementById("photo-check")

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