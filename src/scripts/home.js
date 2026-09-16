import { renderHeroSection } from "./hero";
import { renderFavoriteCoffeeSection } from "./favorite";
import { renderAboutSection } from "./about";
import { renderMobileAppSection } from "./mobile";

function renderHomeMain() {
  return [
    renderHeroSection(),
    renderFavoriteCoffeeSection(),
    renderAboutSection(),
    renderMobileAppSection()
  ];
}

export { renderHomeMain }