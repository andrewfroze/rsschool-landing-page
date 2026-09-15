import "../styles/main.scss";
import logoLight from "../images/logo-light.svg";
import logoDark from "../images/logo-dark.svg";
import sun from "../images/Sun.svg";
import moon from "../images/Moon.svg";
import heroImage from "../images/hero-image.jpg";
import heroVideoSrc from "../images/hero-video.mp4";
import coffeeCup from "../images/coffee-cup.svg?raw";
import { darkTheme, lightTheme } from "./themes";

let activeTheme;
let logo;

const navigationItems = [
  {
  title: "Favorite coffee",
  link: "#"
  },
  {
  title: "About",
  link: "#"
  },
  {
  title: "Mobile app",
  link: "#"
  },
  {
  title: "Contact us",
  link: "#"
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
  themeToggleLabel.className = "header__container__menu__theme-toggle";

  const themeToggleInput = document.createElement("input")
  themeToggleInput.className = "header__container__menu__theme-toggle__input";
  themeToggleInput.type = "checkbox";
  themeToggleInput.checked = isDark();

  const themeSlider = document.createElement("span");
  themeSlider.className = "header__container__menu__theme-toggle__slider";

  themeToggleLabel.append(themeToggleInput, themeSlider);

  const toggleIconsContainer = document.createElement("div");
  toggleIconsContainer.className = "header__container__menu__theme-toggle__toggle-icons";
  themeToggleLabel.append(toggleIconsContainer);

  const sunContainer = document.createElement("div");
  sunContainer.className = "header__container__menu__theme-toggle__toggle-icons__sun-container";

  const sunIcon = document.createElement("img");
  sunIcon.className = "header__container__menu__theme-toggle__toggle-icons__container__sun";
  sunIcon.src = sun;
  sunContainer.append(sunIcon);

  const moonContainer = document.createElement("div");
  moonContainer.className = "header__container__menu__theme-toggle__toggle-icons__moon-container";

  const moonIcon = document.createElement("img");
  moonIcon.className = "header__container__menu__theme-toggle__toggle-icons__moon";
  moonIcon.src = moon;
  moonContainer.append(moonIcon);

  toggleIconsContainer.append(sunContainer, moonContainer);

  themeToggleInput.addEventListener("input", () => {
    activeTheme = themeToggleInput.checked ? "dark" : "light";
    applyActiveTheme();
    updateLogoIcon();
  });
  return themeToggleLabel;
}

headerMenu.append(logo, createNavigationPanel(), createThemeToggle());

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
offerTitle.textContent = "premium coffee at our charming cafe";
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