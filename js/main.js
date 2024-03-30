const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".main__overlay");
const pageHeader = document.querySelector(".header");

document.querySelectorAll(".nav__link").forEach((link) => {
   if (link.href === window.location.href) {
      link.classList.add("nav__link_active");
   }
});

document.body.addEventListener("click", (e) => {
   if (e.target === overlay) {
      burger.classList.remove("burger_active");
      nav.classList.remove("nav_active");
      header.classList.remove("header_active");
      overlay.classList.remove("main__overlay_active");
      enableScroll();
   }
});

burger.addEventListener("click", function () {
   burger.classList.toggle("burger_active");
   nav.classList.toggle("nav_active");
   if (burger.classList.contains("burger_active")) {
      header.classList.add("header_active")
      overlay.classList.add("main__overlay_active");
      nav.style.paddingTop = header.offsetHeight + "px";
      disableScroll();
   } else {
      overlay.classList.remove("main__overlay_active");
      nav.style.paddingTop = "";
      header.classList.remove("header_active");
      enableScroll();
   }
});

const disableScroll = () => {
   const fixBlocks = document?.querySelectorAll('.fixed-block');
   const pagePosition = window.scrollY;
   const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)
      }px`;

   document.documentElement.style.scrollBehavior = 'none';
   fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
   document.body.style.paddingRight = paddingOffset;
   document.body.classList.add('dis-scroll');
   document.body.dataset.position = pagePosition;
   document.body.style.top = `-${pagePosition} px`;
}

const enableScroll = () => {
   const fixBlocks = document?.querySelectorAll('.fixed-block');
   const pagePosition = parseInt(document.body.dataset.position, 10);
   fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
   document.body.style.paddingRight = '0px';

   document.body.style.top = 'auto';
   document.body.classList.remove('dis-scroll');
   window.scroll({
      top: pagePosition,
      left: 0
   });
   document.body.removeAttribute('data-position');
}

const mediaQueryMinWidth_1200 = window.matchMedia('(min-width: 1200px)');
mediaQueryMinWidth_1200.addEventListener("change", (e) => {
   if (e.matches) {
      nav.style.paddingTop = "";
      return true;
   }
   else {
      nav.style.paddingTop = header.offsetHeight + "px";
   }
   return false;
});
