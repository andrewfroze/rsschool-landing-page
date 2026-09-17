import "../styles/header.scss";

import logoLight from "../images/logo-light.svg";
import logoDark from "../images/logo-dark.svg";

import coffeeCup from "../images/coffee-cup.svg?raw";
import { isDark } from "./themes";
import { createThemeToggle } from "./theme-toggle";

let logo;

const navigationItems = [
  {
    title: "Favorite coffee",
    link: "#favorite",
    isCurrentPage: false,
  },
  {
    title: "About",
    link: "#about",
    isCurrentPage: false,
  },
  {
    title: "Mobile app",
    link: "#mobile",
    isCurrentPage: false,
  },
  {
    title: "Contact us",
    link: "#contacts",
    isCurrentPage: true,
  },
];

function renderHeaderMenu(linksPrefix = "", menuUrl = "./menu/") {
  const headerContainer = document.createElement("div");
  headerContainer.className = "header__container";

  const headerMenu = document.createElement("div");
  headerMenu.className = "header__menu";
  headerContainer.append(headerMenu);

  const logoLink = document.createElement("a");
  logoLink.href = linksPrefix + "#";

  logo = document.createElement("img");
  logo.className = "header__logo";
  updateLogoIcon();

  logoLink.append(logo);

  const menuLink = document.createElement("a");
  menuLink.className = "header__menu-link";
  menuLink.href = menuUrl;
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
    logoLink,
    createNavigationPanel(linksPrefix),
    menuControls,
  );
  return headerContainer;
}

function updateLogoIcon() {
  logo.src = isDark() ? logoDark : logoLight;
}

function createNavigationPanel(linksPrefix = "") {
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
    navigationItemLink.href = (item.isCurrentPage ? "" : linksPrefix) + item.link;

    navigationItem.append(navigationItemLink);
    navigationList.append(navigationItem);
  }

  return navigationPanel;
}

export { renderHeaderMenu, updateLogoIcon }