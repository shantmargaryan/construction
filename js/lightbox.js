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