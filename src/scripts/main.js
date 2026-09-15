import "../styles/main.scss";
import logoLight from "../images/logo-light.svg";
import logoDark from "../images/logo-dark.svg";
import sun from "../images/Sun.svg";
import moon from "../images/Moon.svg";
import { darkTheme, lightTheme } from "./themes";

let activeTheme;
let logo;

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

headerMenu.append(logo, createThemeToggle());