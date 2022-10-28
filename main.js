const slideImages = [
  "slide-images/eberhard-grossgasteiger-y2azHvupCVo-unsplash.jpg",
  "slide-images/lukasz-szmigiel-jFCViYFYcus-unsplash.jpg",
  "slide-images/mohamed-nohassi-odxB5oIG_iA-unsplash.jpg",
  "slide-images/oc-gonzalez-xg8z_KhSorQ-unsplash.jpg",
  "slide-images/quino-al-mBQIfKlvowM-unsplash.jpg",
  "slide-images/tim-swaan-eOpewngf68w-unsplash.jpg",
  "slide-images/v2osk-1Z2niiBPg5A-unsplash.jpg",
  "slide-images/wil-stewart-pHANr-CpbYM-unsplash.jpg",
];

let currentIndex = 0;
const autoForwardInterval = 5000; //milliseconds

const frame = document.getElementById("frame");
const imageDiv = document.querySelector(".imageDiv");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

leftArrow.addEventListener("click", () => {
  slideBack();
});

rightArrow.addEventListener("click", () => {
  slideForward();
});

const slideBack = () => {
  if (currentIndex === 0) {
    currentIndex = slideImages.length - 1;
  } else {
    currentIndex = currentIndex - 1;
  }
  displayImage(slideImages[currentIndex]);
};

const slideForward = () => {
  if (currentIndex === slideImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex = currentIndex + 1;
  }
  displayImage(slideImages[currentIndex]);
};

const autoForward = () => {
  setInterval(slideForward, autoForwardInterval);
};

const displayImage = (imagePath) => {
  imageDiv.style.backgroundImage = `url('${imagePath}')`;
};

displayImage(slideImages[currentIndex]);
autoForward();