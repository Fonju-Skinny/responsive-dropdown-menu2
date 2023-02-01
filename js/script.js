

(() => {
  const openNavMenu = document.querySelector(".open-nav-menu"),
    closeNavMenu = document.querySelector(".close-nav-menu"),
    navMenu = document.querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay"),
    mediaSize = 1200;
  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      // prevent default anchor click behavior
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      // if menuItemHasChildren is already expanded, collapse it
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        // collapse existing expanded menuItemHasChildren
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        // expand new menuItemHasChildren
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  });
  function collapseSubMenu() {
    navMenu
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  }
  function resizeFix() {
    // if navMenu is open ,close it
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }
    // if menuItemHasChildren is expanded , collapse it
    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  }

  window.addEventListener("resize", function () {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });
})();

let importanthis_buttons = document.querySelector("#importanthis_buttons");
let down = document.querySelector("#down");
let up = document.querySelector("#up");
up.style.display = "none";
// let importanthis_buttons = document.querySelector('#importanthis_buttons')

down.addEventListener("click", openhiddenBTNs);
up.addEventListener("click", closehiddenBTNs);

function openhiddenBTNs() {
  importanthis_buttons.classList.add("active");
  up.style.display = "flex";
  down.style.display = "none";
}
function closehiddenBTNs() {
  importanthis_buttons.classList.remove("active");
  down.style.display = "flex";
  up.style.display = "none";
}

let navmenu = document.querySelector("#navmenu");
navmenu.classList.remove("active");
let updonics = document.querySelector("#updonics");
let header = document.querySelector("#header");
// header.style.display = 'none'
let she_down = document.querySelector("#she_down");
let she_up = document.querySelector("#she_up");
she_up.style.display = "none";

let home_section = document.querySelector("#home_section");
home_section.classList.remove("foloww");

she_down.addEventListener("click", she_downhiddenBTNs);
she_up.addEventListener("click", she_uphiddenBTNs);

function she_downhiddenBTNs() {
  header.classList.add("active");
  updonics.classList.add("active");
  she_up.style.display = "flex";
  she_down.style.display = "none";
  navmenu.classList.add("active");
  home_section.classList.add("foloww");
}
function she_uphiddenBTNs() {
  header.classList.remove("active");
  updonics.classList.remove("active");
  she_down.style.display = "flex";
  she_up.style.display = "none";
  navmenu.classList.remove("active");
  home_section.classList.remove("foloww");
}

// home_section.style.display = 'none'
let home_section_iccs_bars = document.querySelector("#home_section_iccs_bars");
let home_section_iccs_xmark = document.querySelector(
  "#home_section_iccs_xmark"
);
home_section_iccs_xmark.style.display = "none";

home_section_iccs_bars.addEventListener("click", home_section_iccs_barsF);
home_section_iccs_xmark.addEventListener("click", home_section_iccs_xmarkF);

function home_section_iccs_barsF() {
  home_section.classList.add("active");
  // updonics.classList.add("active");
  home_section_iccs_xmark.style.display = "flex";
  home_section_iccs_bars.style.display = "none";
}
function home_section_iccs_xmarkF() {
  home_section.classList.remove("active");
  // updonics.classList.remove("active");
  home_section_iccs_bars.style.display = "flex";
  home_section_iccs_xmark.style.display = "none";
}

let NavSearch = document.querySelector("#NavSearch");
let searchdiv = document.querySelector("#searchdiv");
let closeSeach = document.querySelector("#closeSeach");
// closeSeach.style.display = 'none'

NavSearch.addEventListener("click", NavSearchS);
closeSeach.addEventListener("click", closeSeachS);

function NavSearchS() {
  searchdiv.classList.add("active");
  // updonics.classList.add("active");
  // home_section_iccs_xmark.style.display = "flex";
  NavSearch.style.display = "none";
}
function closeSeachS() {
  searchdiv.classList.remove("active");
  // updonics.classList.add("active");
  // home_section_iccs_xmark.style.display = "flex";
  NavSearch.style.display = "flex";
}

let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
    home_section.classList.remove("active");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
    home_section.classList.remove("active");
  }
  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");

  home_section.classList.add("active");
  home_section_iccs_xmark.style.display = "flex";
  home_section_iccs_bars.style.display = "none";
}

const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
btn.onclick = () => {
  widget.style.display = "none";
  post.style.display = "block";
  editBtn.onclick = () => {
    widget.style.display = "block";
    post.style.display = "none";
  };
  return false;
};

let closeallthisex = document.querySelector(".closeallthisex");
closeallthisex.addEventListener("click", cLoseallthisex);
let closeallthiset = document.querySelector("#closeallthiset");
closeallthiset.addEventListener("click", cLoseallthisex);

function cLoseallthisex() {
  home_section.classList.remove("active");
  home_section_iccs_xmark.style.display = "none";
  home_section_iccs_bars.style.display = "flex";
}

function cLoseallthisex() {
  home_section.classList.remove("active");
  home_section_iccs_xmark.style.display = "none";
  home_section_iccs_bars.style.display = "flex";
}


















// themes code starts here =========================

let boddy = document.querySelector("body");
let themebg = document.querySelector("#themebg");
let themeclr = document.querySelector("#themeclr");

let themesSun = document.querySelector("#themesSun");
let themesMoon = document.querySelector("#themesMoon");
let themesGradient = document.querySelector("#themesGradient");
themesSun.classList.remove("active")
themesMoon.classList.remove("active")
themesGradient.classList.add("active")


let logograd = document.querySelector(".logograd");
let logoblack = document.querySelector(".logoblack");
let logowhite = document.querySelector(".logowhite");

logograd.style.display = 'flex'
logoblack.style.display = 'none'
logowhite.style.display = 'none'


function ThemesSun() {
  boddy.classList.add("activthemesSun")
  themesMoon.classList.remove("active")
themesGradient.classList.remove("active")
themesSun.classList.add("active")

logograd.style.display = 'none'
logoblack.style.display = 'flex'
logowhite.style.display = 'none'


  boddy.classList.remove("activethemesMoon")
  boddy.classList.remove("activethemesGradient")

  themebg.textContent = "Background-color: white;"
  themeclr.textContent = "color: black;"
}
function ThemesMoon() {
themesMoon.classList.add("active")
themesGradient.classList.remove("active")
themesSun.classList.remove("active")



logograd.style.display = 'none'
logoblack.style.display = 'none'
logowhite.style.display = 'flex'

  boddy.classList.add("activethemesMoon")

  boddy.classList.remove("activthemesSun")
  boddy.classList.remove("activethemesGradient")

  themebg.textContent = "Background-color: black;"
  themeclr.textContent = "color: white;"
}
function ThemesGradient() {
themesGradient.classList.add("active")
themesSun.classList.remove("active")
themesMoon.classList.remove("active")

logograd.style.display = 'flex'
logoblack.style.display = 'none'
logowhite.style.display = 'none'

  boddy.classList.add("activethemesGradient")

  boddy.classList.remove("activethemesMoon")
  boddy.classList.remove("activthemesSun")

  themebg.textContent = "Background-color: dark blue;"
  themeclr.textContent = "color: Purple;"
}















// faqs section starts


let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else{
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}

// faqs section ends

let containers = document.querySelector('.containers')
let card = document.querySelectorAll('.card')
// let HH2 = document.querySelectorAll('li h2')


card.forEach(el => {
   el.addEventListener("click", function(){
    containers.querySelector('.active').classList.remove('active')


      el.classList.add('active')
      // HH2.classList.add('HE2')
   })
})