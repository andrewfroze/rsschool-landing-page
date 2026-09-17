import "../styles/favorite.scss";

import { favoriteCoffees } from "./coffees";

let currentSlide = 1;
let isAnimating = false;


function renderFavoriteCoffeeSection() {
  const favoriteCoffee = document.createElement("section");
  favoriteCoffee.className = "favorite-coffee";
  favoriteCoffee.id = "favorite";

  const favoriteCoffeeContainer = document.createElement("div");
  favoriteCoffeeContainer.className = "favorite-coffee__container";

  const title = document.createElement("h2");
  title.className = "favorite-coffee__title";
  title.innerHTML = "Choose your <em>favorite</em> coffee";

  const slider = document.createElement("div");
  slider.className = "favorite-coffee__slider";

  const prevButton = document.createElement("button");
  prevButton.className = "favorite-coffee__button favorite-coffee__button--prev";
  prevButton.type = "button";
  prevButton.setAttribute("aria-label", "Previous coffee");
  prevButton.textContent = "←";

  const slidesWrapper = document.createElement("div");
  slidesWrapper.className = "favorite-coffee__slides-wrapper";

  const slidesContainer = document.createElement("div");
  slidesContainer.className = "favorite-coffee__slides";

  slidesWrapper.append(slidesContainer);

  const nextButton = document.createElement("button");
  nextButton.className = "favorite-coffee__button favorite-coffee__button--next";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next coffee");
  nextButton.textContent = "→";

  const controls = document.createElement("div");
  controls.className = "favorite-coffee__controls";

  favoriteCoffees.forEach((coffee, index) => {
    const slide = document.createElement("article");
    slide.className = "favorite-coffee__slide";

    const image = document.createElement("img");
    image.className = "favorite-coffee__image";
    image.src = coffee.image;
    image.alt = coffee.name;

    const description = document.createElement("div");
    description.className = "favorite-coffee__description";

    const name = document.createElement("h3");
    name.className = "favorite-coffee__name";
    name.textContent = coffee.name;

    const text = document.createElement("p");
    text.className = "favorite-coffee__text";
    text.textContent = coffee.description;

    const price = document.createElement("span");
    price.className = "favorite-coffee__price";
    price.textContent = coffee.price;

    description.append(name, text, price);
    slide.append(image, description);
    slidesContainer.append(slide);

    const control = document.createElement("button");
    control.className = "favorite-coffee__control";
    control.type = "button";
    control.setAttribute("aria-label", `Show ${coffee.name}`);

    control.addEventListener("click", () => {
      if (isAnimating) return;

      isAnimating = true;
      currentSlide = index + 1;
      updateSlider();
    });

    controls.append(control);
  });

  const slides = [...slidesContainer.children];

  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  slidesContainer.prepend(lastClone);
  slidesContainer.append(firstClone);

  slider.append(prevButton, slidesWrapper, nextButton);
  favoriteCoffeeContainer.append(title, slider, controls);
  favoriteCoffee.append(favoriteCoffeeContainer);

  function updateSlider(animate = true) {
    slidesContainer.style.transition = animate
      ? "transform 500ms ease"
      : "none";

    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    [...controls.children].forEach((control, index) => {
      control.classList.toggle(
        "active",
        index === getRealSlideIndex(),
      );
    });
  }

  function getRealSlideIndex() {
    return (currentSlide - 1 + favoriteCoffees.length) % favoriteCoffees.length;
  }

  prevButton.addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;
    currentSlide -= 1;
    updateSlider();
  });

  nextButton.addEventListener("click", () => {
    if (isAnimating) return;

    isAnimating = true;
    currentSlide += 1;
    updateSlider();
  });

  slidesContainer.addEventListener("transitionend", () => {
    isAnimating = false;

    if (currentSlide === favoriteCoffees.length + 1) {
      currentSlide = 1;
      updateSlider(false);
    }

    if (currentSlide === 0) {
      currentSlide = favoriteCoffees.length;
      updateSlider(false);
    }
  });

  updateSlider();
  return favoriteCoffee;
}

export { renderFavoriteCoffeeSection }