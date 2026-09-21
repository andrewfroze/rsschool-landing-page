import sun from "../images/Sun.svg";
import moon from "../images/Moon.svg";
import { isDark, setActiveTheme, applyActiveTheme, saveSettings } from "./themes";
import { updateLogoIcon } from "./header";
  
function createThemeToggle() {
  const themeToggle = document.createElement("div");
  themeToggle.className = "theme-toggle";

  const themeToggleInput = document.createElement("input");
  themeToggleInput.className = "theme-toggle__input";
  themeToggleInput.id = "theme-toggle";
  themeToggleInput.type = "checkbox";
  themeToggleInput.checked = isDark();

  const themeSlider = document.createElement("label");
  themeSlider.className = "theme-toggle__slider";
  themeSlider.htmlFor = "theme-toggle";

  const toggleIcons = document.createElement("div");
  toggleIcons.className = "theme-toggle__icons";

  const sunContainer = document.createElement("span");
  sunContainer.className = "theme-toggle__icon theme-toggle__icon--sun";

  const sunIcon = document.createElement("img");
  sunIcon.src = sun;
  sunIcon.alt = "";
  sunContainer.append(sunIcon);

  const moonContainer = document.createElement("span");
  moonContainer.className = "theme-toggle__icon theme-toggle__icon--moon";

  const moonIcon = document.createElement("img");
  moonIcon.src = moon;
  moonIcon.alt = "";
  moonContainer.append(moonIcon);

  toggleIcons.append(sunContainer, moonContainer);

  themeToggle.append(
    themeToggleInput,
    themeSlider,
    toggleIcons,
  );

  themeToggleInput.addEventListener("input", () => {
    setActiveTheme(themeToggleInput.checked ? "dark" : "light");

    applyActiveTheme();
    updateLogoIcon();
    saveSettings();
  });

  return themeToggle;
}

export { createThemeToggle }