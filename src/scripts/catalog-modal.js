import "../styles/catalog-modal.scss";
import { getImage } from "./catalog-images";

function createItemModal(item) {
  const overlay = document.createElement("div");
  overlay.className = "catalog-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "catalog-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", item.name);

  const previewContainer = document.createElement("div");
  previewContainer.className = "catalog-modal__preview-container";
  modal.append(previewContainer);

  const preview = document.createElement("div");
  preview.className = "catalog-modal__preview";

  const image = document.createElement("img");
  image.className = "catalog-modal__image";
  image.src = getImage(item.name);
  image.alt = item.name;
  preview.append(image);

  const description = document.createElement("div");
  description.className = "catalog-modal__description";

  const title = document.createElement("div");
  title.className = "catalog-modal__title";

  const name = document.createElement("h3");
  name.textContent = item.name;

  const text = document.createElement("p");
  text.textContent = item.description;

  title.append(name, text);

  const size = createOptionGroup("Size", item.sizes, "size");

  const additives = createOptionGroup("Additives", item.additives, "name");

  const total = document.createElement("div");
  total.className = "catalog-modal__total";

  const totalLabel = document.createElement("span");
  totalLabel.textContent = "Total:";

  const price = document.createElement("span");
  price.textContent = `\$${item.price}`;

  total.append(totalLabel, price);

  const alert = document.createElement("div");
  alert.className = "catalog-modal__alert";

  const info = document.createElement("span");
  info.className = "catalog-modal__info";
  info.textContent = "i";

  const alertText = document.createElement("p");
  alertText.textContent =
    "The cost is not final. Download our mobile app to see the final price and place your order. Earn loyalty points and enjoy your favorite coffee with up to 20% discount.";

  alert.append(info, alertText);

  const closeButton = document.createElement("button");
  closeButton.className = "catalog-modal__close";
  closeButton.type = "button";
  closeButton.textContent = "Close";

  description.append(
    title,
    size,
    additives,
    total,
    alert,
    closeButton,
  );

  previewContainer.append(preview, description);
  modal.append();
  overlay.append(modal);

  function closeModal() {
    overlay.remove();
    document.body.classList.remove("modal-open");
  }

  closeButton.addEventListener("click", closeModal);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });

  document.addEventListener("keydown", function onKeyDown(event) {
    if (event.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKeyDown);
    }
  });

  document.body.classList.add("modal-open");

  return overlay;
}

function createOptionGroup(titleText, options, labelKey) {
  const group = document.createElement("div");
  group.className = "catalog-modal__option-group";

  const title = document.createElement("span");
  title.className = "catalog-modal__option-title";
  title.textContent = titleText;

  const tabs = document.createElement("div");
  tabs.className = "catalog-modal__options";

  Object.keys(options).forEach((option) => {
    const button = document.createElement("button");

    button.className = "catalog-modal__option";
    button.type = "button";
    button.dataset.value = option[labelKey];

    if (option.active) {
      button.classList.add("active");
    }

    const icon = document.createElement("span");
    icon.className = "catalog-modal__option-icon";

    if (Array.isArray(options)) {
      icon.textContent = +option + 1;
    } else {
      icon.textContent = option.toUpperCase();
    }


    const label = document.createElement("span");
    label.textContent = options[option][labelKey];

    button.append(icon, label);

    button.addEventListener("click", () => {
      tabs.querySelectorAll(".catalog-modal__option").forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
    });

    tabs.append(button);
  });

  group.append(title, tabs);

  return group;
}

export { createItemModal };