import { createNavigationPanel, createMenuLink } from "./navigation";

function renderBurgerMenu(linksPrefix, menuUrl) {
  const menu = document.createElement("div");
  menu.className = "burger-menu";

  const navigation = createNavigationPanel(linksPrefix, "burger-menu");
  const menuLink = createMenuLink(menuUrl, "burger-menu");

  menuLink.addEventListener("click", () => {
    closeBurgerMenu();
  });

  menu.append(navigation, menuLink);

  return menu;
}

function closeBurgerMenu() {
  document.body.classList.remove("burger-menu-open");
}

function openBurgerMenu() {
  document.body.classList.add("burger-menu-open");
}

function toggleBurgerMenu() {
  document.body.classList.toggle("burger-menu-open");
}

document.body.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }
  if (event.code === "Escape" && document.body.classList.contains("burger-menu-open")) {
    document.body.classList.remove("burger-menu-open");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeBurgerMenu();
  }
});

export { renderBurgerMenu, openBurgerMenu, closeBurgerMenu, toggleBurgerMenu }