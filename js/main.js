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




// scroll animation

function getScrollAnimation() {
   window.addEventListener("scroll", getScrollAnimation);
   const scrollAnim = document.querySelectorAll(".scroll-anim");
   if (scrollAnim.length > 0) {
      scrollAnim.forEach(animItem => {
         const { top, height } = animItem.getBoundingClientRect();
         const offset = window.scrollY + top
         const scrollAnimPoint = window.innerHeight - height / 3
         if (offset < window.scrollY + scrollAnimPoint && offset + height > window.scrollY) {
            animItem.classList.add("scroll-anim_active")
         } else {
            if (!animItem.classList.contains("scroll-anim_once")) {
               animItem.classList.remove("scroll-anim_active")
            }
         }
      });
   }
};

setTimeout(getScrollAnimation, 700);

// end scroll animation

// start lightbox

const projectItem = document.querySelectorAll(".project__item");
const lightbox = document.querySelector(".lightbox");
const lightboxWrapper = document.querySelector(".lightbox__wrapper");
const lightboxContent = document.querySelector(".lightbox__content");
const lightboxImg = document.querySelector(".lightbox__img");
const lightboxClose = document.querySelector(".lightbox__close");
const lightboxNext = document.querySelector(".lightbox__next");
const lightboxPrev = document.querySelector(".lightbox__prev");


let index = 1

function showLightBox() {
   let imgLocation = projectItem[index - 1].children[0].getAttribute("src")
   lightboxImg.setAttribute("src", imgLocation);
}

function currentImg() {
   lightbox.style.opacity = "1";
   lightbox.style.pointerEvents = "all"

   let imageIndex = parseInt(this.getAttribute("data-item"));
   index = imageIndex
   showLightBox();
}

projectItem.forEach(item => item.addEventListener("click", currentImg));

function sliderImage(slider) {
   if (slider < 0) {
      index = projectItem.length
   }
   if (slider > projectItem.length) {
      index = 1
   }
}

function prevImage() {
   sliderImage(index -= 1);
   showLightBox();
}

function nextImage() {
   sliderImage(index += 1);
   showLightBox();
}

lightboxPrev?.addEventListener("click", prevImage);
lightboxNext?.addEventListener("click", nextImage);


lightbox?.addEventListener("click", (event) => {
   if (event.target === lightboxClose || event.target === lightboxWrapper) {
      lightbox.style.opacity = "0"
      lightbox.style.pointerEvents = "none";
   }
});

// end lightbox


// const resizeObserver = new ResizeObserver((entris) => {
//    entris.forEach((entry) => {
//       if (entry.contentRect.height) {
//          console.log(entry.contentRect);
//          if (!nav) {
//             return
//          }
//          nav.style.paddingTop = entry.target.offsetHeight + "px";
//       }
//    })
// });

// resizeObserver.observe(header);
