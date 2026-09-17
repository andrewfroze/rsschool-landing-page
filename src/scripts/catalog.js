import "../styles/catalog.scss";
import { createMenuCard } from "./menu-card.js";
import coffeeIcon from "../images/coffee.png";
import teaIcon from "../images/tea.png";
import dessertIcon from "../images/dessert.png";
import { menu as catalogMenu } from "./catalog-items.js";

function renderCatalog() {
  const menu = document.createElement("section");
  menu.className = "menu";
  menu.id = "menu";

  const container = document.createElement("div");
  container.className = "menu__container";

  const offer = document.createElement("div");
  offer.className = "menu__offer";

  const title = document.createElement("h2");
  title.className = "menu__title";
  title.innerHTML =
    "Behind each of our cups hides an <em>amazing surprise</em>";

  const tabs = document.createElement("div");
  tabs.className = "menu__tabs";

  function createTab(category, icon, text, active = false) {
    const tab = document.createElement("button");

    tab.className = "menu__tab";
    tab.type = "button";
    tab.dataset.category = category;

    if (active) {
      tab.classList.add("active");
    }

    const iconWrapper = document.createElement("span");
    iconWrapper.className = "menu__tab-icon";

    const img = document.createElement("img");
    img.className = "menu__tab-icon__img";
    img.src = icon;
    iconWrapper.append(img);

    const label = document.createElement("span");
    label.className = "menu__tab-label";
    label.textContent = text;

    tab.append(iconWrapper, label);

    return tab;
  }

  tabs.append(
    createTab("coffee", coffeeIcon, "Coffee", true),
    createTab("tea", teaIcon, "Tea"),
    createTab("dessert", dessertIcon, "Dessert"),
  );

  offer.append(title, tabs);

  const grid = document.createElement("div");
  grid.className = "menu__grid";

  function renderCards(category) {
    grid.replaceChildren();

    console.log(category);
    console.log(catalogMenu);
    catalogMenu[category].forEach((item) => {
      grid.append(createMenuCard(item));
    });
  }

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".menu__tab");

    if (!tab) {
      return;
    }

    tabs.querySelector(".active")?.classList.remove("active");
    tab.classList.add("active");

    renderCards(tab.dataset.category);
  });

  container.append(offer, grid);
  menu.append(container);

  renderCards("coffee");
  return menu;
}

export { renderCatalog }