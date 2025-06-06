document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("mainLogo");
  const openTag = document.getElementById("opentagSB");
  const closeTag = document.getElementById("closetagSB");
  const sidebar = document.getElementById("sidebar");
  const DIYSlide = document.getElementById("DIY_Video");
  const DIYImg = document.getElementsByClassName("DIYimg")
//  const DIYSlideEnd = document.getElementById("DIY_Video");

  let StartX = 0;
  let EndX = 0;
  let counter = 0;

  DIYSlide.addEventListener("touchstart",(eventS)=>{
    StartX = eventS.touches[0].pageX;
  });

  DIYSlide.addEventListener("touchmove",(eventM)=>{
    EndX = eventM.changedTouches[0].pageX
  });

  DIYSlide.addEventListener("touchend",()=>{
    let distanceX = StartX - EndX;
    if (distanceX < -50){
      if(counter > -1){
        counter -= 1;
      }
    } else if(distanceX > 50 && EndX!=0){
      if(counter < 1){
        counter += 1;
      }
    }
    
    if(counter==0){
      DIYImg[0].classList.add("center")
      DIYImg[0].classList.remove("left")
      DIYImg[0].classList.remove("right")

      DIYImg[1].classList.add("center")
      DIYImg[1].classList.remove("left")
      DIYImg[1].classList.remove("right")

      DIYImg[2].classList.add("center")
      DIYImg[2].classList.remove("left")
      DIYImg[2].classList.remove("right")
    }else if(counter==-1){
      DIYImg[0].classList.remove("center")
      DIYImg[0].classList.add("left")
      DIYImg[0].classList.remove("right")

      DIYImg[1].classList.remove("center")
      DIYImg[1].classList.add("left")
      DIYImg[1].classList.remove("right")

      DIYImg[2].classList.remove("center")
      DIYImg[2].classList.add("left")
      DIYImg[2].classList.remove("right")
    }else if(counter==1){
      DIYImg[0].classList.remove("center")
      DIYImg[0].classList.remove("left")
      DIYImg[0].classList.add("right")

      DIYImg[1].classList.remove("center")
      DIYImg[1].classList.remove("left")
      DIYImg[1].classList.add("right")

      DIYImg[2].classList.remove("center")
      DIYImg[2].classList.remove("left")
      DIYImg[2].classList.add("right")
    }
  });

  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    if (scroll >= 10) {
      navbar.classList.add("smallNavBar");
      logo.src = "resources/landing/ShrinkedLogo_Navbar.svg";
    } else {
      navbar.classList.remove("smallNavBar");
      logo.src = "resources/landing/CarlaBeautyLogo.svg";
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

  //*** BEGIN SERVICES FORM ***
  const weddCheck = document.getElementById("wedd-opt");
  const partyCheck = document.getElementById("party-opt");
  const photoCheck = document.getElementById("photo-opt");
  const wedding = document.getElementById("wedd-check");
  const party = document.getElementById("party-check");
  const photo = document.getElementById("photo-check");
  const wedding_next = document.getElementById("wedding_next");
  const party_next = document.getElementById("party_next");
  const photoshoot_submit = document.getElementById("photoshoot_submit");

  weddCheck.addEventListener("click", () => {
    wedding.classList.remove("hide");
    party.classList.add("hide");
    photo.classList.add("hide");
    wedding_next.classList.remove("display_none")
    party_next.classList.add("display_none")
    photoshoot_submit.classList.add("display_none")
  });

  partyCheck.addEventListener("click", () => {
    wedding.classList.add("hide");
    party.classList.remove("hide");
    photo.classList.add("hide");
    wedding_next.classList.add("display_none")
    party_next.classList.remove("display_none")
    photoshoot_submit.classList.add("display_none")
  });

  photoCheck.addEventListener("click", () => {
    wedding.classList.add("hide");
    party.classList.add("hide");
    photo.classList.remove("hide");
    wedding_next.classList.add("display_none")
    party_next.classList.add("display_none")
    photoshoot_submit.classList.remove("display_none")
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
    call.classList.remove("hide");
    whats.classList.add("hide");
    sms.classList.add("hide");
    email.classList.add("hide");
  });

  whatsaapOpt.addEventListener("click", () => {
    call.classList.add("hide");
    whats.classList.remove("hide");
    sms.classList.add("hide");
    email.classList.add("hide");
  });

  smsOpt.addEventListener("click", () => {
    call.classList.add("hide");
    whats.classList.add("hide");
    sms.classList.remove("hide");
    email.classList.add("hide");
  });

  emailOpt.addEventListener("click", () => {
    call.classList.add("hide");
    whats.classList.add("hide");
    sms.classList.add("hide");
    email.classList.remove("hide");
  });

  //*** END SERVICES FORM ***

  //*** BEGIN CLASSES FORM ***
  const master_subscription_check = document.getElementById(
    "master_subscription_check"
  );
  const makeup_workshop_check = document.getElementById(
    "makeup_workshop_check"
  );
  const self_makeup_check = document.getElementById("self_makeup_check");
  const master_subscription = document.getElementById("master_subscription");
  const makeup_workshop = document.getElementById("makeup_workshop");
  const self_makeup = document.getElementById("self_makeup");

  master_subscription_check.addEventListener("click", () => {
    master_subscription.classList.remove("hide");
    makeup_workshop.classList.add("hide");
    self_makeup.classList.add("hide");
  });

  makeup_workshop_check.addEventListener("click", () => {
    master_subscription.classList.add("hide");
    makeup_workshop.classList.remove("hide");
    self_makeup.classList.add("hide");
  });

  self_makeup_check.addEventListener("click", () => {
    master_subscription.classList.add("hide");
    makeup_workshop.classList.add("hide");
    self_makeup.classList.remove("hide");
  });

  const callOpt_classes = document.getElementById("call_classes");
  const whatsaapOpt_classes = document.getElementById("whatsapp_classes");
  const smsOpt_classes = document.getElementById("sms_classes");
  const emailOpt_classes = document.getElementById("email_classes");
  const call_classes = document.getElementById("call-check_classes");
  const whats_classes = document.getElementById("whats-check_classes");
  const sms_classes = document.getElementById("sms-check_classes");
  const email_classes = document.getElementById("email-check_classes");

  callOpt_classes.addEventListener("click", () => {
    call_classes.classList.remove("hide");
    whats_classes.classList.add("hide");
    sms_classes.classList.add("hide");
    email_classes.classList.add("hide");
  });

  whatsaapOpt_classes.addEventListener("click", () => {
    call_classes.classList.add("hide");
    whats_classes.classList.remove("hide");
    sms_classes.classList.add("hide");
    email_classes.classList.add("hide");
  });

  smsOpt_classes.addEventListener("click", () => {
    call_classes.classList.add("hide");
    whats_classes.classList.add("hide");
    sms_classes.classList.remove("hide");
    email_classes.classList.add("hide");
  });

  emailOpt_classes.addEventListener("click", () => {
    call_classes.classList.add("hide");
    whats_classes.classList.add("hide");
    sms_classes.classList.add("hide");
    email_classes.classList.remove("hide");
  });
  //*** END CLASSES FORM ***
  // END LETS TALK
});
