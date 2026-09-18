import { getImage } from "./catalog-images";
import { createItemModal } from "./catalog-modal";

function createMenuCard(item) {
  const card = document.createElement("article");
  card.className = "menu__card";

  const box = document.createElement("div");
  box.className = "menu__card-box";

  const image = document.createElement("img");
  image.className = "menu__card-image";
  image.src = getImage(item.name);
  image.alt = item.name;

  box.append(image);

  const description = document.createElement("div");
  description.className = "menu__card-description";

  const title = document.createElement("div");
  title.className = "menu__card-title";

  const name = document.createElement("h3");
  name.className = "menu__card-name";
  name.textContent = item.name;

  const text = document.createElement("p");
  text.className = "menu__card-text";
  text.textContent = item.description;

  title.append(name, text);

  const price = document.createElement("p");
  price.className = "menu__card-price";
  price.textContent = `$${Number(item.price).toFixed(2)}`;

  description.append(title, price);

  card.append(box, description);

  card.addEventListener("click", () => {
    document.body.append(createItemModal(item));
  });

  return card;
}

export { createMenuCard };