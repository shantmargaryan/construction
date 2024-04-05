const title = document.querySelector('.hero-services__title');
const text = document.querySelector('.electricity__text');
const img = document.querySelectorAll('.electricity__gallery_img');
const content = JSON.parse(localStorage.getItem('content'))
title.textContent = content.title;
text.textContent = content.text;
img.forEach((item, index) => {
  item.src = content.img[index]
});