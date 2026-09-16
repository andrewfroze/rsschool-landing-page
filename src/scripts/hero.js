import "../styles/hero.scss";

import heroImage from "../images/hero-image.jpg";
import heroVideoSrc from "../images/hero-video.mp4";
import coffeeCup from "../images/coffee-cup.svg?raw";

function renderHeroSection({ onClickMenu }) {
  const hero = document.createElement("section");
  hero.className = "hero";

  const heroContainer = document.createElement("div");
  heroContainer.className = "hero__container";
  hero.append(heroContainer);

  const heroPoster = document.createElement("img");
  heroPoster.className = "hero__container__poster";
  heroPoster.src = heroImage;
  heroPoster.alt = "";

  const heroVideo = document.createElement("video");
  heroVideo.className = "hero__container__video";
  heroVideo.autoplay = true;
  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;

  const source = document.createElement("source");
  source.src = heroVideoSrc;
  source.type = "video/mp4";

  heroVideo.append(source);
  heroContainer.append(heroPoster, heroVideo);
  hero.append(heroContainer);

  heroVideo.addEventListener("canplay", () => {
    heroContainer.classList.add("video-loaded");
  });

  const offer = document.createElement("div");
  offer.className = "hero__container__offer";
  heroContainer.append(offer);

  const offerTitle = document.createElement("h1");
  offerTitle.className = "hero__container__offer__title";
  offerTitle.innerHTML = "<em>Enjoy</em> premium coffee at our charming cafe";
  offer.append(offerTitle);

  const offerDescription= document.createElement("p");
  offerDescription.className = "hero__container__offer__description";
  offerDescription.textContent = "With its inviting atmosphere and delicious coffee options, the Coffee House Resource is a popular destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.";
  offer.append(offerDescription);

  const offerMenuButton = document.createElement("button");
  offerMenuButton.className = "hero__container__offer__menu-button";
  offerMenuButton.textContent = "Menu";
  offer.append(offerMenuButton);

  const coffeeCupIcon = document.createElement("span");
  coffeeCupIcon.className = "hero__container__offer__menu-button__icon";
  coffeeCupIcon.innerHTML = coffeeCup;
  offerMenuButton.append(coffeeCupIcon);

  offerMenuButton.addEventListener("click", () => {
    onClickMenu();
  });
  return hero;
}

export { renderHeroSection }