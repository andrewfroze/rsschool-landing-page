function createMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu__card";
  card.textContent = item.name;
  return card;
}

export { createMenuCard }