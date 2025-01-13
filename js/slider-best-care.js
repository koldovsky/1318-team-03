const carousel = document.querySelector(".best-care__slider");
const carouselInner = carousel.querySelector(".best-care__card__inner");
const prevButton = carousel.querySelector(".best-care__btn__prev");
const nextButton = carousel.querySelector(".best-care__btn__next");

let slidesPerView = getSlidesPerView();
let slides = Array.from(carouselInner.children);
let currentIndex = slidesPerView;

setupCarousel();

function getSlidesPerView() {
  if (window.innerWidth >= 1280) return 4;
  if (window.innerWidth >= 1024) return 2;
  return 1;
}

function setupCarousel() {
  carouselInner.innerHTML = "";
  const clonesStart = slides.slice(-slidesPerView).map(cloneSlide);
  const clonesEnd = slides.slice(0, slidesPerView).map(cloneSlide);

  carouselInner.append(...clonesStart, ...slides, ...clonesEnd);

  slides = Array.from(carouselInner.children);

  const slideWidth = 100 / slidesPerView;
  slides.forEach((slide) => {
    slide.style.flex = `0 0 ${slideWidth}%`;
  });

  currentIndex = slidesPerView;
  updateCarousel();
}

function cloneSlide(slide) {
  const clone = slide.cloneNode(true);
  clone.classList.add("clone");
  return clone;
}

function updateCarousel() {
  const offset = -(currentIndex * 100) / slidesPerView;
  carouselInner.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - slidesPerView * 2 - 1;
    carouselInner.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = "";
      });
    });
  }
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= slides.length - slidesPerView) {
    currentIndex = slidesPerView;
    carouselInner.style.transition = "none";
    updateCarousel();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        carouselInner.style.transition = "";
      });
    });
  }
  updateCarousel();
});

window.addEventListener("resize", () => {
  slidesPerView = getSlidesPerView();
  setupCarousel();
});
