import { createMenuCard } from "./menu-card.js";
import coffeeIcon from "../images/coffee.webp";
import teaIcon from "../images/tea.webp";
import dessertIcon from "../images/dessert.webp";
import more from "../images/more.svg?raw";
import menuItems from "../resources/products.json";

const collapsedRows = 2;
let activeTab;
let grid;
let columns;
let collapsed = true;
let container;
let showMoreButton;

function renderCatalog() {
  const menu = document.createElement("section");
  menu.className = "menu";
  menu.id = "menu";

  container = document.createElement("div");
  container.className = "menu__container";

  const offer = document.createElement("div");
  offer.className = "menu__offer";

  const title = document.createElement("h1");
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
      activeTab = tab;
      tab.classList.add("active");
    }

    const iconWrapper = document.createElement("span");
    iconWrapper.className = "menu__tab-icon";

    const img = document.createElement("img");
    img.className = "menu__tab-icon__img";
    img.src = icon;
    img.alt = `Tab icon: ${text}`;
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

  grid = document.createElement("div");
  grid.className = "menu__grid";

  container.append(offer, grid);
  menu.append(container);

  tabs.addEventListener("click", (event) => {
    const tab = event.target.closest(".menu__tab");

    if (!tab) {
      return;
    }

    activeTab.classList.remove("active");
    tab.classList.add("active");
    activeTab = tab;

    collapsed = true;
    renderCards(tab.dataset.category);
  });

  requestAnimationFrame(() => {
    columns = getColumnsCount();
    renderCards(activeTab.dataset.category);
  });
  return menu;
}

function renderMoreButton() {
  showMoreButton?.remove();

  if (!collapsed) {
    return;
  }

  showMoreButton = document.createElement("button");
  showMoreButton.className = "menu__show-more";
  showMoreButton.type = "button";
  showMoreButton.setAttribute("aria-label", "Show more");

  const refreshIcon = document.createElement("span");
  refreshIcon.className = "menu__show-more-icon";

  refreshIcon.innerHTML = more;

  showMoreButton.append(refreshIcon);

  showMoreButton.addEventListener("click", () => {
    collapsed = false;
    showMoreButton.remove();
    renderCards(activeTab.dataset.category);
  })
  container.append(showMoreButton);
}

function getColumnsCount() {
  return getComputedStyle(grid).gridTemplateColumns.split(" ").length;
}

function renderCards(category) {
  grid.replaceChildren();

  const visibleCardsCount = collapsedRows * columns;

  let categoryItems = menuItems.filter((item) => item.category === category);
  let cardsToRender = categoryItems;

  if (collapsed) {
    cardsToRender = cardsToRender.slice(0, visibleCardsCount);
  }

  cardsToRender.forEach((item) => {
    grid.append(createMenuCard(item));
  });

  showMoreButton?.remove();
  showMoreButton = null;

  if (collapsed && categoryItems.length > cardsToRender.length) {
    renderMoreButton();
  }
}

window.addEventListener("resize", () => {
  if (!collapsed) {
    return;
  }

  const actualColumns = getColumnsCount();

  if (actualColumns !== columns) {
    columns = actualColumns;
    renderCards(activeTab.dataset.category);
  }
});

export { renderCatalog }