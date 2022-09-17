import {setImg} from './functions.js';

//////////////////////////////////////////////////////////////////////////
// nav list icon
//////////////////////////////////////////////////////////////////////////
let container = document.querySelector(".container");
let burgerBtn = document.querySelector(".burger-btn");

//// when clicking on the burger btn
window.addEventListener('click', (e) => {
  if (e.target == burgerBtn) {
    container.classList.toggle("open");
  } else if (e.target.closest("nav")) {
    return;
  } else {
    container.classList.remove("open");
  }
});

//////////////////////////////////////////////////////////////////////////
// image slider
//////////////////////////////////////////////////////////////////////////
let bullets = document.querySelectorAll(".bullets i.fa-circle");
// let prevImgBtn = document.querySelector(".img-slider .previous-img");
// let nextImgBtn = document.querySelector(".img-slider .next-img");

let currentBullet = 1;

//// when clicking on the bullet
bullets.forEach((element) => {
  element.addEventListener('click', e => {
    setImg(e.target, bullets);

    currentBullet = e.target.dataset.id;
  });
});

// slide images regularly
setInterval(() => {
  setImg(bullets[currentBullet], bullets);
  if (currentBullet >= bullets.length - 1 || currentBullet < 0) {
    currentBullet = 0;
  } else {
    currentBullet++;
  }
}, 5000);

// previous and next buttons
// prevImgBtn.addEventListener('click', () => {
//   if (currentBullet <= 0) {
//     return;
//   } else {
//     setImg(bullets[currentBullet - 2], bullets);
//     currentBullet -= 2;
//   }
  
// });

// nextImgBtn.addEventListener('click', () => {
//   if (currentBullet >= bullets.length - 1) {
//     return;
//   } else {
//     setImg(bullets[currentBullet + 1], bullets);
//     currentBullet = currentBullet + 1;
//   }
// });


//// set the image automatically and randomly ///////////
// let lastRandom = 10;
// let random = 0;

// setInterval(() => {
//   do {
//     random = Math.floor(Math.random() * 5);
//   } while (random == lastRandom);
  
//   lastRandom = random;

//   setImg(bullets[random], bullets);
// }, 5000);


// set the year in the copy right
let year = document.querySelector(".copyright time");

let dateNow = new Date();
year.append(dateNow.getFullYear());