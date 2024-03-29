/* Start Define open navbar for xxl and xl sizes */

let openerSideNav = document.querySelector("button#hamburger");
let sideNav = document.querySelector("div.sideNav");
let subPage = document.querySelector("div.subPage");
let menuButtonIcon = document.querySelector("button#hamburger>img:first-of-type");
let closeButtonIcon = document.querySelector("button#hamburger>img:nth-of-type(2)");

openerSideNav.addEventListener("click", function () {
  sideNav.classList.toggle("active-flex");
  subPage.classList.toggle("active-delayed");
  menuButtonIcon.classList.toggle("close");
  closeButtonIcon.classList.toggle("active-delayed");
  loginBig.classList.remove("active-flex")
  subRegPage.classList.remove("active-delayed");
  userFocusedButtonIcon.classList.remove("inlineB-active");
  userButtonIcon.classList.remove("close");
});
subPage.addEventListener("click", function () {
  sideNav.classList.toggle("active-flex");
  subPage.classList.toggle("active-delayed");
  menuButtonIcon.classList.toggle("close");
  closeButtonIcon.classList.toggle("active-delayed");
});

/* End Define open navbar for xxl and xl sizes */

/* Start Define open searchBar for smaller sizes */

let searchButtonLg = document.querySelector("button#MglassLG");
let seacrhBarLg = document.querySelector("div.searchLG");
let subSearchPage = document.querySelector("div.subSearchPage");

searchButtonLg.addEventListener("click", function () {
  seacrhBarLg.classList.toggle("active-flex");
  subSearchPage.classList.toggle("active-delayed");
});
subSearchPage.addEventListener("click", function () {
  seacrhBarLg.classList.toggle("active-flex");
  subSearchPage.classList.toggle("active-delayed");
});

/* End Define open searchBar for smaller sizes */

/* Start Define open LoginBar for xxl and xl sizes */

let loginBig = document.querySelector("div.loginBig");
let userButton = document.querySelector("button#user");
let userButtonIcon = document.querySelector("button#user>img:first-of-type");
let userFocusedButtonIcon = document.querySelector("button#user>img:last-of-type");
let subRegPage = document.querySelector("div.subRegisterPage");

userButton.addEventListener("click" , function(){
  loginBig.classList.toggle("active-flex")
  subRegPage.classList.toggle("active-delayed");
  sideNav.classList.remove("active-flex");
  subPage.classList.remove("active-delayed");
  menuButtonIcon.classList.remove("close");
  closeButtonIcon.classList.remove("active-delayed");
  userButtonIcon.classList.toggle("close");
  userFocusedButtonIcon.classList.toggle("inlineB-active");
});
subRegPage.addEventListener("click", function () {
  loginBig.classList.toggle("active-flex");
  subRegPage.classList.toggle("active-delayed");
  userButtonIcon.classList.toggle("close");
  userFocusedButtonIcon.classList.toggle("inlineB-active")
});

/* End Define open LoginBar for xxl and xl sizes */

/* Start Define open navbar for smaller sizes */

let buttonMenuProducts = document.querySelector("div.navButton>button.products");
let buttonMenuUser = document.querySelector("div.navButton>button.user");
let accordionMenu = document.querySelector("div.accordionMenu");
let login = document.querySelector("div.login");

buttonMenuProducts.addEventListener("click", function () {
  this.classList.add("clickButtonMenu");
  accordionMenu.classList.add("active-flex");
  login.classList.remove("active-flex");
  buttonMenuUser.classList.remove("clickButtonMenu");
  buttonMenuUser.classList.remove("userFocusedIcon");
});

if (buttonMenuProducts.autofocus) {
  buttonMenuProducts.click();
};

buttonMenuUser.addEventListener("click", function () {
  this.classList.add("clickButtonMenu");
  this.classList.add("userFocusedIcon")
  accordionMenu.classList.remove("active-flex");
  login.classList.add("active-flex");
  buttonMenuProducts.classList.remove("clickButtonMenu");
});

/* End Define open navbar for smaller sizes */

/* Start accordion menu elements */

let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active-accordion");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active-flex");
  });
}
let subAcc = document.getElementsByClassName("sub-accordion");

for (let i = 0; i < subAcc.length; i++) {
  subAcc[i].addEventListener("click", function () {
    this.classList.toggle("active-sub-accordion");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active-flex");
  });
}

let accColorSkin = document.querySelector(".accordion-color-skin");

accColorSkin.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-skin");
});

let accColorMake = document.querySelector(".accordion-color-make");

accColorMake.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-make");
});
let accColorFrag = document.querySelector(".accordion-color-frag");

accColorFrag.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-frag");
});
let accColorBath = document.querySelector(".accordion-color-bath");

accColorBath.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-bath");
});
let accColorHair = document.querySelector(".accordion-color-hair");

accColorHair.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-hair");
});
let accColorAcc = document.querySelector(".accordion-color-accessories");

accColorAcc.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-accessories");
});
let accColorWellness = document.querySelector(".accordion-color-wellness");

accColorWellness.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-wellness");
});
let accColorMen = document.querySelector(".accordion-color-men");

accColorMen.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-men");
});
let accColorKids = document.querySelector(".accordion-color-kids");

accColorKids.addEventListener("click", function () {
  this.classList.toggle("active-accordion-color-kids");
});

/* End accordion menu elements */


/* Start initial close Button for top slider */

let closeButton = document.querySelector("span#topSliderClose");

closeButton.addEventListener("click" , function(){
  closeButton.parentNode.remove();
})

/* End initial close Button for top slider */

/* Start accordionLink menu */

let accLink = document.getElementsByClassName("accordionLink");

for (let i = 0; i < accLink.length; i++) {
  accLink[i].addEventListener("click", function () {
    this.classList.toggle("active-accordionLink");
    let panel = this.nextElementSibling;
    panel.classList.toggle("active-flex");
  });
}

/* End accordionLink menu */

