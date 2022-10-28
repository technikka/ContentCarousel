const images = document.querySelectorAll("#frame > img");

let currentIndex = 0;
const autoForwardInterval = 5000; //milliseconds

const frame = document.getElementById("frame");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

leftArrow.addEventListener("click", () => {
  slideBack();
});

rightArrow.addEventListener("click", () => {
  slideForward();
});

const slideBack = () => {
  toggleShow(images[currentIndex]);

  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }

  toggleShow(images[currentIndex]);
};

const slideForward = () => {
  toggleShow(images[currentIndex]);

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }

  toggleShow(images[currentIndex]);
};

const autoForward = () => {
  setInterval(slideForward, autoForwardInterval);
};

const toggleShow = (image) => {
  image.classList.toggle("show");
};

toggleShow(images[currentIndex]);
autoForward();
