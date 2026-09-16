import { renderHeroSection } from "./hero";
import { renderFavoriteCoffeeSection } from "./favorite";
import { renderAboutSection } from "./about";
import { renderMobileAppSection } from "./mobile";

function renderHomeMain({ onClickMenu }) {
  return [
    renderHeroSection({onClickMenu: onClickMenu}),
    renderFavoriteCoffeeSection(),
    renderAboutSection(),
    renderMobileAppSection()
  ];
}

export { renderHomeMain }