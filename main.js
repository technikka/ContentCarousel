const images = document.querySelectorAll(".img-container > img");

let currentIndex = 0;
let autoForwardInterval = 5000; //milliseconds

const frame = document.getElementById("frame");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

leftArrow.addEventListener("click", () => {
  slideBack();
  resetAutoForwardTimer(); 
});

rightArrow.addEventListener("click", () => {
  slideForward();
  resetAutoForwardTimer(); 
});

const slideBack = () => {
  toggleShow(images[currentIndex]);
  toggleNav(navCircles[currentIndex]);

  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }

  toggleShow(images[currentIndex]);
  toggleNav(navCircles[currentIndex]);
};

const slideForward = () => {
  toggleShow(images[currentIndex]);
  toggleNav(navCircles[currentIndex]);

  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }

  toggleShow(images[currentIndex]);
  toggleNav(navCircles[currentIndex]);
};

// let autoForwardTimer = setInterval(slideForward, autoForwardInterval);

const resetAutoForwardTimer = () => {
  clearInterval(autoForwardTimer);
  autoForwardTimer = setInterval(slideForward, autoForwardInterval);
};

const toggleShow = (image) => {
  image.classList.toggle("show");
};

const findImageIndex = (node) => {
  for (i = 0; i < navCircles.length; i++) {
    if (navCircles[i] === node) {
      return i;
    }
  }
};

const goToImage = (index) => {
  toggleNav(navCircles[currentIndex]);
  toggleShow(images[currentIndex]);

  currentIndex = index;

  toggleNav(navCircles[currentIndex]);
  toggleShow(images[currentIndex]);
};

const navContainer = document.querySelector(".carousel-nav");

const createNav = (() => {
  for (i = 0; i < images.length; i++) {
    const circle = document.createElement("div");
    navContainer.appendChild(circle);

    circle.addEventListener("click", () => {
      const goToIndex = findImageIndex(circle);
      goToImage(goToIndex);
      resetAutoForwardTimer(); 
    });
  }
})();

const navCircles = document.querySelectorAll(".carousel-nav > div");

const toggleNav = (circle) => {
  circle.classList.toggle("selected");
};

toggleNav(navCircles[currentIndex]);
toggleShow(images[currentIndex]);
