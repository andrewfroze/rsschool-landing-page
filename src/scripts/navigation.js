import coffeeCup from "../images/coffee-cup.svg?raw";
import { closeBurgerMenu } from "./burger-menu";

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

function createNavigationPanel(linksPrefix = "", classPrefix = "header", isBurger = false) {
  const navigationPanel = document.createElement("nav");
  navigationPanel.className = `${classPrefix}__navigation`;

  const navigationList = document.createElement("ul");
  navigationList.className = `${classPrefix}__navigation-list`;

  navigationPanel.append(navigationList);

  for (const item of navigationItems) {
    const navigationItem = document.createElement("li");
    navigationItem.className = `${classPrefix}__navigation-item`;

    const navigationItemLink = document.createElement("a");
    navigationItemLink.className = `${classPrefix}__navigation-link`;
    navigationItemLink.textContent = item.title;
    navigationItemLink.href = (item.isCurrentPage ? "" : linksPrefix) + item.link;

    navigationItemLink.addEventListener("click", () => {
      closeBurgerMenu();
    });

    navigationItem.append(navigationItemLink);
    navigationList.append(navigationItem);
  }

  return navigationPanel;
}

function createMenuLink(menuUrl, classPrefix = "header") {
  const menuLink = document.createElement("a");
  menuLink.className = `${classPrefix}__menu-link`;
  menuLink.href = menuUrl;
  menuLink.textContent = "Menu";

  const menuCoffeeCupIcon = document.createElement("span");
  menuCoffeeCupIcon.className = `${classPrefix}__menu-link-icon`;
  menuCoffeeCupIcon.innerHTML = coffeeCup;

  menuLink.append(menuCoffeeCupIcon);
  return menuLink;
}

export { createNavigationPanel, createMenuLink }