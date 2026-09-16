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
import mobileScreensImage from "../images/mobile-screens.png";
import appStoreIcon from "../images/app-store.svg?raw";
import googlePlayIcon from "../images/google-play.svg?raw";
import pinIcon from "../images/pin-alt.svg?raw";
import phoneIcon from "../images/phone.svg?raw";
import clockIcon from "../images/clock.svg?raw";
import twitterIcon from "../images/twitter.svg?raw";
import instagramIcon from "../images/instagram.svg?raw";
import facebookIcon from "../images/facebook.svg?raw";

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
headerMenu.className = "header__menu";
headerContainer.append(headerMenu);

logo = document.createElement("img");
logo.className = "header__logo";
updateLogoIcon();

function updateLogoIcon() {
  logo.src = isDark() ? logoDark : logoLight;
}

function createNavigationPanel() {
  const navigationPanel = document.createElement("nav");
  navigationPanel.className = "header__navigation";

  const navigationList = document.createElement("ul");
  navigationList.className = "header__navigation-list";

  navigationPanel.append(navigationList);

  for (const item of navigationItems) {
    const navigationItem = document.createElement("li");
    navigationItem.className = "header__navigation-item";

    const navigationItemLink = document.createElement("a");
    navigationItemLink.className = "header__navigation-link";
    navigationItemLink.textContent = item.title;
    navigationItemLink.href = item.link;

    navigationItem.append(navigationItemLink);
    navigationList.append(navigationItem);
  }

  return navigationPanel;
}

function createThemeToggle() {
  const themeToggle = document.createElement("label");
  themeToggle.className = "theme-toggle";

  const themeToggleInput = document.createElement("input");
  themeToggleInput.className = "theme-toggle__input";
  themeToggleInput.type = "checkbox";
  themeToggleInput.checked = isDark();

  const themeSlider = document.createElement("span");
  themeSlider.className = "theme-toggle__slider";

  const toggleIcons = document.createElement("div");
  toggleIcons.className = "theme-toggle__icons";

  const sunContainer = document.createElement("span");
  sunContainer.className = "theme-toggle__icon theme-toggle__icon--sun";

  const sunIcon = document.createElement("img");
  sunIcon.src = sun;
  sunIcon.alt = "";
  sunContainer.append(sunIcon);

  const moonContainer = document.createElement("span");
  moonContainer.className = "theme-toggle__icon theme-toggle__icon--moon";

  const moonIcon = document.createElement("img");
  moonIcon.src = moon;
  moonIcon.alt = "";
  moonContainer.append(moonIcon);

  toggleIcons.append(sunContainer, moonContainer);

  themeToggle.append(
    themeToggleInput,
    themeSlider,
    toggleIcons,
  );

  themeToggleInput.addEventListener("input", () => {
    activeTheme = themeToggleInput.checked ? "dark" : "light";

    applyActiveTheme();
    updateLogoIcon();
    saveSettings();
  });

  return themeToggle;
}

const menuLink = document.createElement("a");
menuLink.className = "header__menu-link";
menuLink.textContent = "Menu";

const menuCoffeeCupIcon = document.createElement("span");
menuCoffeeCupIcon.className = "header__menu-link-icon";
menuCoffeeCupIcon.innerHTML = coffeeCup;

menuLink.append(menuCoffeeCupIcon);

const menuControls = document.createElement("aside");
menuControls.className = "header__controls";

const burgerButton = document.createElement("button");
burgerButton.className = "header__burger";
burgerButton.type = "button";
burgerButton.setAttribute("aria-label", "Open menu");

const burgerIcon = document.createElement("span");
burgerIcon.className = "header__burger-icon";

burgerButton.append(burgerIcon);

menuControls.append(
  createThemeToggle(),
  menuLink,
  burgerButton,
);

headerMenu.append(
  logo,
  createNavigationPanel(),
  menuControls,
);

const hero = document.createElement("section");
hero.className = "hero";
main.append(hero);

const heroContainer = document.createElement("div");
heroContainer.className = "hero__container";
hero.append(heroContainer);

const heroPoster = document.createElement("img");
heroPoster.className = "hero__container__poster";
heroPoster.src = heroImage;
heroPoster.alt = "";

const heroVideo = document.createElement("video");
heroVideo.className = "hero__container__video";
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
offer.className = "hero__container__offer";
heroContainer.append(offer);

const offerTitle = document.createElement("h1");
offerTitle.className = "hero__container__offer__title";
offerTitle.innerHTML = "<em>Enjoy</em> premium coffee at our charming cafe";
offer.append(offerTitle);

const offerDescription= document.createElement("p");
offerDescription.className = "hero__container__offer__description";
offerDescription.textContent = "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.";
offer.append(offerDescription);

const offerMenuButton = document.createElement("button");
offerMenuButton.className = "hero__container__offer__menu-button";
offerMenuButton.textContent = "Menu";
offer.append(offerMenuButton);

const coffeeCupIcon = document.createElement("span");
coffeeCupIcon.className = "hero__container__offer__menu-button__icon";
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
about.id = "about";

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

const mobileApp = document.createElement("section");
mobileApp.className = "mobile-app";
mobileApp.id = "mobile";

const mobileAppContainer = document.createElement("div");
mobileAppContainer.className = "mobile-app__container";

const mobileOffer = document.createElement("div");
mobileOffer.className = "mobile-app__offer";

const mobileTitle = document.createElement("h2");
mobileTitle.className = "mobile-app__title";
mobileTitle.innerHTML = "<em>Download</em> our app to start ordering";

const description = document.createElement("p");
description.className = "mobile-app__description";
description.textContent =
  "Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are";

const buttons = document.createElement("div");
buttons.className = "mobile-app__buttons";

function createAppButton(icon, caption, name) {
  const button = document.createElement("a");
  button.className = "mobile-app__button";
  button.href = "#";
  button.setAttribute("aria-label", `${name} download`);

  const iconContainer = document.createElement("span");
  iconContainer.className = "mobile-app__button__icon";
  iconContainer.innerHTML = icon;

  const text = document.createElement("span");
  text.className = "mobile-app__button__text";

  const captionElement = document.createElement("span");
  captionElement.className = "mobile-app__button__caption";
  captionElement.textContent = caption;

  const nameElement = document.createElement("span");
  nameElement.className = "mobile-app__button__name";
  nameElement.textContent = name;

  text.append(captionElement, nameElement);
  button.append(iconContainer, text);

  return button;
}

const appStoreButton = createAppButton(
  appStoreIcon,
  "Available on the",
  "App Store",
);

const googlePlayButton = createAppButton(
  googlePlayIcon,
  "Available on",
  "Google Play",
);

buttons.append(appStoreButton, googlePlayButton);

mobileOffer.append(mobileTitle, description, buttons);

const mobileScreens = document.createElement("img");
mobileScreens.className = "mobile-app__screens";
mobileScreens.src = mobileScreensImage;
mobileScreens.alt = "Resource mobile app";

mobileAppContainer.append(mobileOffer, mobileScreens);
mobileApp.append(mobileAppContainer);

main.append(mobileApp);

const contacts = document.createElement("section");
contacts.className = "contacts";
contacts.id = "contacts";

const contactsContainer = document.createElement("div");
contactsContainer.className = "contacts__container";

const contactsOffer = document.createElement("div");
contactsOffer.className = "contacts__offer";

const contactsTitle = document.createElement("h2");
contactsTitle.className = "contacts__title";
contactsTitle.innerHTML = "Sip, Savor, Smile. <em>It’s coffee time!</em>";

const socials = document.createElement("div");
socials.className = "contacts__socials";

function createSocialButton(icon, label) {
  const social = document.createElement("a");
  social.className = "contacts__social";
  social.href = "#";
  social.setAttribute("aria-label", label);
  social.innerHTML = icon;

  return social;
}

socials.append(
  createSocialButton(twitterIcon, "Twitter"),
  createSocialButton(instagramIcon, "Instagram"),
  createSocialButton(facebookIcon, "Facebook"),
);

contactsOffer.append(contactsTitle, socials);

const contactsInfo = document.createElement("div");
contactsInfo.className = "contacts__info";

const contactsInfoTitle = document.createElement("h3");
contactsInfoTitle.className = "contacts__info-title";
contactsInfoTitle.textContent = "Contact us";

const contactsList = document.createElement("div");
contactsList.className = "contacts__list";

function createContactLink(icon, text, href = "#") {
  const link = document.createElement("a");
  link.className = "contacts__link";
  link.href = href;

  const iconContainer = document.createElement("span");
  iconContainer.className = "contacts__link-icon";
  iconContainer.innerHTML = icon;

  const textElement = document.createElement("span");
  textElement.textContent = text;

  link.append(iconContainer, textElement);

  return link;
}

contactsList.append(
  createContactLink(
    pinIcon,
    "8558 Green Rd., LA",
    "#",
  ),
  createContactLink(
    phoneIcon,
    "+1 (603) 555-0123",
    "tel:+16035550123",
  ),
  createContactLink(
    clockIcon,
    "Mon–Sat: 9:00–23:00",
    "#",
  ),
);

contactsInfo.append(contactsInfoTitle, contactsList);

contactsContainer.append(contactsOffer, contactsInfo);
contacts.append(contactsContainer);

footer.append(contacts);