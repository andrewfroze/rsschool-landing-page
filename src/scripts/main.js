import "../styles/main.scss";
import logoLight from "../images/logo-light.svg";
import logoDark from "../images/logo-dark.svg";
import sun from "../images/Sun.svg";
import moon from "../images/Moon.svg";
import heroImage from "../images/hero-image.jpg";
import heroVideoSrc from "../images/hero-video.mp4";
import coffeeCup from "../images/coffee-cup.svg?raw";
import { darkTheme, lightTheme } from "./themes";
import { coffees } from "./coffees";
import about1 from "../images/about-1.jpg";
import about2 from "../images/about-2.jpg";
import about3 from "../images/about-3.jpg";
import about4 from "../images/about-4.jpg";

let currentSlide = 1;
let activeTheme;
let logo;

const navigationItems = [
  {
  title: "Favorite coffee",
  link: "#favorite"
  },
  {
  title: "About",
  link: "#about"
  },
  {
  title: "Mobile app",
  link: "#mobile"
  },
  {
  title: "Contact us",
  link: "#contacts"
  },
];

function loadActiveTheme() {
  activeTheme = localStorage.getItem("theme");

  if (!activeTheme || !["light", "dark"].includes(activeTheme)) {
    activeTheme = "light";
    localStorage.setItem("theme", activeTheme);
  }

  applyActiveTheme();
}

function saveSettings() {
  localStorage.setItem("theme", activeTheme);
}

function isDark() {
  return activeTheme === "dark";
}

function applyThemeSettings(theme) {
  console.log(theme);
  document.documentElement.style.setProperty("--theme-text-primary", theme.text.primary);
  document.documentElement.style.setProperty("--theme-text-inverse", theme.text.inverse);
  document.documentElement.style.setProperty("--theme-text-accent", theme.text.accent);

  document.documentElement.style.setProperty("--theme-background-page", theme.background.page);
  document.documentElement.style.setProperty("--theme-background-container", theme.background.container);
  document.documentElement.style.setProperty("--theme-background-overlay", theme.background.overlay);

  document.documentElement.style.setProperty("--theme-border-primary", theme.border.primary);
  document.documentElement.style.setProperty("--theme-border-inverse", theme.border.inverse);
  document.documentElement.style.setProperty("--theme-toggle-hover", theme.toggle.hover);
}

loadActiveTheme();

const header = document.createElement("header");
header.className = "header";

const main = document.createElement("main");
main.className = "main";

const footer = document.createElement("footer");
footer.className = "footer";

document.body.append(header, main, footer);

function applyActiveTheme() {
  switch (activeTheme) {
    case "light":
      applyThemeSettings(lightTheme);
      break;
    case "dark":
      applyThemeSettings(darkTheme);
      break;
  }
}

const headerContainer = document.createElement("div");
headerContainer.className = "header__container";
header.append(headerContainer);

const headerMenu = document.createElement("div");
headerMenu.className = "header__container__menu";
headerContainer.append(headerMenu);

logo = document.createElement("img");
logo.className = "header__container__menu__logo";
updateLogoIcon();

function updateLogoIcon() {
  logo.src = isDark() ? logoDark : logoLight;
}

function createNavigationPanel() {
  const navigationPanel = document.createElement("nav");
  navigationPanel.className = "header__container__menu__navigation";

  const navigationList = document.createElement("ul");
  navigationList.className = "header__container__menu__navigation__list";
  navigationPanel.append(navigationList);  

  for (const item of navigationItems) {
    const navigationItem = document.createElement("li");
    navigationItem.className = "header__container__menu__navigation__list__item";

    const navigationItemLink = document.createElement("a");
    navigationItemLink.textContent = item.title;
    navigationItemLink.href = item.link;
    navigationItemLink.className = "header__container__menu__navigation__list__item__link";

    navigationItem.append(navigationItemLink);
    navigationList.append(navigationItem);
  }

  return navigationPanel;
}

function createThemeToggle() {
  const themeToggleLabel = document.createElement("label");
  themeToggleLabel.className = "header__container__menu__controls__theme-toggle";

  const themeToggleInput = document.createElement("input")
  themeToggleInput.className = "header__container__menu__controls__theme-toggle__input";
  themeToggleInput.type = "checkbox";
  themeToggleInput.checked = isDark();

  const themeSlider = document.createElement("span");
  themeSlider.className = "header__container__menu__controls__theme-toggle__slider";

  themeToggleLabel.append(themeToggleInput, themeSlider);

  const toggleIconsContainer = document.createElement("div");
  toggleIconsContainer.className = "header__container__menu__controls__theme-toggle__toggle-icons";
  themeToggleLabel.append(toggleIconsContainer);

  const sunContainer = document.createElement("div");
  sunContainer.className = "header__container__menu__controls__theme-toggle__toggle-icons__sun-container";

  const sunIcon = document.createElement("img");
  sunIcon.className = "header__container__menu__controls__theme-toggle__toggle-icons__container__sun";
  sunIcon.src = sun;
  sunContainer.append(sunIcon);

  const moonContainer = document.createElement("div");
  moonContainer.className = "header__container__menu__controls__theme-toggle__toggle-icons__moon-container";

  const moonIcon = document.createElement("img");
  moonIcon.className = "header__container__menu__controls__theme-toggle__toggle-icons__moon";
  moonIcon.src = moon;
  moonContainer.append(moonIcon);

  toggleIconsContainer.append(sunContainer, moonContainer);

  themeToggleInput.addEventListener("input", () => {
    activeTheme = themeToggleInput.checked ? "dark" : "light";
    applyActiveTheme();
    updateLogoIcon();
    saveSettings();
  });
  return themeToggleLabel;
}

const menuLink = document.createElement("a");
menuLink.className = "header__container__menu__controls__menu-link";
menuLink.textContent = "Menu";

const menuCoffeeCupIcon = document.createElement("span");
menuCoffeeCupIcon.className = "header__container__menu__controls__menu-link__icon";
menuCoffeeCupIcon.innerHTML = coffeeCup;
menuLink.append(menuCoffeeCupIcon);

const menuControls = document.createElement("aside");
menuControls.className = "header__container__menu__controls";

menuControls.append(createThemeToggle(), menuLink);
headerMenu.append(logo, createNavigationPanel(), menuControls);

const hero = document.createElement("section");
hero.className = "header__hero";
header.append(hero);

const heroContainer = document.createElement("div");
heroContainer.className = "header__hero__container";
hero.append(heroContainer);

const heroPoster = document.createElement("img");
heroPoster.className = "header__hero__container__poster";
heroPoster.src = heroImage;
heroPoster.alt = "";

const heroVideo = document.createElement("video");
heroVideo.className = "header__hero__container__video";
heroVideo.autoplay = true;
heroVideo.muted = true;
heroVideo.loop = true;
heroVideo.playsInline = true;

const source = document.createElement("source");
source.src = heroVideoSrc;
source.type = "video/mp4";

heroVideo.append(source);
heroContainer.append(heroPoster, heroVideo);
hero.append(heroContainer);

heroVideo.addEventListener("canplay", () => {
  heroContainer.classList.add("video-loaded");
});

const offer = document.createElement("div");
offer.className = "header__hero__container__offer";
heroContainer.append(offer);

const offerTitle = document.createElement("h1");
offerTitle.className = "header__hero__container__offer__title";
offerTitle.innerHTML = "<em>Enjoy</em> premium coffee at our charming cafe";
offer.append(offerTitle);

const offerDescription= document.createElement("p");
offerDescription.className = "header__hero__container__offer__description";
offerDescription.textContent = "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.";
offer.append(offerDescription);

const offerMenuButton = document.createElement("button");
offerMenuButton.className = "header__hero__container__offer__menu-button";
offerMenuButton.textContent = "Menu";
offer.append(offerMenuButton);

const coffeeCupIcon = document.createElement("span");
coffeeCupIcon.className = "header__hero__container__offer__menu-button__icon";
coffeeCupIcon.innerHTML = coffeeCup;
offerMenuButton.append(coffeeCupIcon);

offerMenuButton.addEventListener("click", () => {
  openMenuPage();
})

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

coffees.forEach((coffee, index) => {
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
    currentSlide = index;
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
main.append(favoriteCoffee);

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
  return (currentSlide - 1 + coffees.length) % coffees.length;
}

prevButton.addEventListener("click", () => {
  currentSlide -= 1;
  updateSlider();
});

nextButton.addEventListener("click", () => {
  currentSlide += 1;
  updateSlider();
});

slidesContainer.addEventListener("transitionend", () => {
  if (currentSlide === coffees.length + 1) {
    currentSlide = 1;
    updateSlider(false);
  }

  if (currentSlide === 0) {
    currentSlide = coffees.length;
    updateSlider(false);
  }
});

updateSlider();

const about = document.createElement("section");
about.className = "about";

const aboutContainer = document.createElement("div");
aboutContainer.className = "about__container";

const aboutTitle = document.createElement("h2");
aboutTitle.className = "about__title";
aboutTitle.innerHTML =
  'Resource is <em>the perfect and cozy place</em> where you can enjoy a variety of hot beverages, relax, catch up with friends, or get some work done.';

const aboutImages = document.createElement("div");
aboutImages.className = "about__images";

const column1 = document.createElement("div");
column1.className = "about__column";

const column2 = document.createElement("div");
column2.className = "about__column";

function createAboutBox(image, className) {
  const box = document.createElement("div");
  box.className = `about__box ${className}`;

  const imageElement = document.createElement("img");
  imageElement.className = "about__image";
  imageElement.src = image;
  imageElement.alt = "";

  box.append(imageElement);

  return box;
}

column1.append(
  createAboutBox(about1, "about__box--large"),
  createAboutBox(about2, "about__box--small"),
);

column2.append(
  createAboutBox(about3, "about__box--small"),
  createAboutBox(about4, "about__box--large"),
);

aboutImages.append(column1, column2);
aboutContainer.append(aboutTitle, aboutImages);
about.append(aboutContainer);

main.append(about);