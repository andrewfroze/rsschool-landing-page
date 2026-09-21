import logoLight from "../images/logo-light.svg";
import logoDark from "../images/logo-dark.svg";

import { isDark } from "./themes";
import { createThemeToggle } from "./theme-toggle";
import { closeBurgerMenu, renderBurgerMenu, toggleBurgerMenu } from "./burger-menu";
import { createNavigationPanel, createMenuLink } from "./navigation";

let logo;

function renderHeaderMenu(linksPrefix = "", menuUrl = `${import.meta.env.BASE_URL}menu/`) {
  const headerContainer = document.createElement("div");
  headerContainer.className = "header__container";

  const headerMenu = document.createElement("div");
  headerMenu.className = "header__menu";
  headerContainer.append(headerMenu);

  const logoLink = document.createElement("a");
  logoLink.href = linksPrefix + "#";

  logo = document.createElement("img");
  logo.className = "header__logo";
  logo.alt = "logo";
  updateLogoIcon();

  logoLink.append(logo);

  logoLink.addEventListener("click", () => {
    closeBurgerMenu();
  });

  const menuLink = createMenuLink(menuUrl);

  const menuControls = document.createElement("aside");
  menuControls.className = "header__controls";

  const burgerButton = document.createElement("button");
  burgerButton.className = "header__burger";
  burgerButton.type = "button";
  burgerButton.setAttribute("aria-label", "Open menu");

  const burgerIcon = document.createElement("span");
  burgerIcon.className = "header__burger-icon";

  burgerButton.append(burgerIcon);

  burgerButton.addEventListener("click", () => {
    toggleBurgerMenu();
  });

  menuControls.append(
    createThemeToggle(),
    menuLink,
    burgerButton,
  );

  const navigationPanel = createNavigationPanel(linksPrefix);

  headerMenu.append(
    logoLink,
    navigationPanel,
    menuControls,
  );

  document.body.append(renderBurgerMenu(linksPrefix, menuUrl));
  return headerContainer;
}

function updateLogoIcon() {
  logo.src = isDark() ? logoDark : logoLight;
}



export { renderHeaderMenu, updateLogoIcon }