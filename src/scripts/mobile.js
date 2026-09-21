import mobileScreensImage from "../images/mobile-screens.png";
import appStoreIcon from "../images/app-store.svg?raw";
import googlePlayIcon from "../images/google-play.svg?raw";

function renderMobileAppSection() {
    const mobileApp = document.createElement("section");
  mobileApp.className = "mobile-app";
  mobileApp.id = "mobile";

  const mobileAppContainer = document.createElement("div");
  mobileAppContainer.className = "mobile-app__container";

  const mobileOffer = document.createElement("div");
  mobileOffer.className = "mobile-app__offer";

  const mobileTitle = document.createElement("h2");
  mobileTitle.className = "mobile-app__title";
  mobileTitle.innerHTML = "<em>Download</em> our app to start ordering";

  const description = document.createElement("p");
  description.className = "mobile-app__description";
  description.textContent =
    "Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are";

  const buttons = document.createElement("div");
  buttons.className = "mobile-app__buttons";

  function createAppButton(icon, caption, name, link) {
    const button = document.createElement("a");
    button.className = "mobile-app__button";
    button.href = link;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.setAttribute("aria-label", `${name} download`);

    const iconContainer = document.createElement("span");
    iconContainer.className = "mobile-app__button__icon";
    iconContainer.innerHTML = icon;

    const text = document.createElement("span");
    text.className = "mobile-app__button__text";

    const captionElement = document.createElement("span");
    captionElement.className = "mobile-app__button__caption";
    captionElement.textContent = caption;

    const nameElement = document.createElement("span");
    nameElement.className = "mobile-app__button__name";
    nameElement.textContent = name;

    text.append(captionElement, nameElement);
    button.append(iconContainer, text);

    return button;
  }

  const appStoreButton = createAppButton(
    appStoreIcon,
    "Available on the",
    "App Store",
    "https://www.apple.com/app-store/",
  );

  const googlePlayButton = createAppButton(
    googlePlayIcon,
    "Available on",
    "Google Play",
    "https://play.google.com/store/games?hl=en",
  );

  buttons.append(appStoreButton, googlePlayButton);

  mobileOffer.append(mobileTitle, description, buttons);

  const mobileScreens = document.createElement("img");
  mobileScreens.className = "mobile-app__screens";
  mobileScreens.src = mobileScreensImage;
  mobileScreens.alt = "Resource mobile app";

  mobileAppContainer.append(mobileOffer, mobileScreens);
  mobileApp.append(mobileAppContainer);
  return mobileApp;
}

export { renderMobileAppSection }