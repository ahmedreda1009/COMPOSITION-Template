// set the active and not active bullet
let imgs = document.querySelectorAll(".img-slider .images img");

export function setImg(activeBullet, allBullets) {
  imgs.forEach(ele => {
    ele.classList.remove('active');
    allBullets.forEach(el => {
      el.classList.remove("active");
    })
  })

  imgs.forEach(ele => {
    if (ele.dataset.id === activeBullet.dataset.id) {
      ele.classList.add("active");
      activeBullet.classList.add("active");
    }
  })
}

// generate an infinitly repeatedly range of numbers
export function* generateNum(start, end) {
  let num = start - 1;

  while (true) {
    if (num < end) {
      num++;
      yield num;
    } else {
      num = start;
      yield num;
    }
  }
}