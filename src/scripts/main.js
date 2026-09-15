import "../styles/main.scss";
import { darkTheme, lightTheme } from "./themes";

let activeTheme;

function loadActiveTheme() {
  activeTheme = localStorage.getItem("theme");

  if (!activeTheme || !["light", "dark"].includes(activeTheme)) {
    activeTheme = "light";
    localStorage.setItem("theme", activeTheme);
  }

  switch (activeTheme) {
    case "light":
      applyThemeSettings(lightTheme);
      break;
    case "dark":
      applyThemeSettings(darkTheme);
      break;
  }
}

function applyThemeSettings(theme) {
  console.log(theme);
  document.documentElement.style.setProperty("--theme-text-primary", theme.text.primary);
  document.documentElement.style.setProperty("--theme-text-inverse", theme.text.inverse);
  document.documentElement.style.setProperty("--theme-text-accent", theme.text.accent);

  document.documentElement.style.setProperty("--theme-background-page", theme.background.page);
  document.documentElement.style.setProperty("--theme-background-container", theme.background.container);
  document.documentElement.style.setProperty("--theme-background-overlay", theme.background.overlay);

  document.documentElement.style.setProperty("--theme-border-primary", theme.border.primary);
  document.documentElement.style.setProperty("--theme-border-inverse", theme.border.inverse);
}

loadActiveTheme();

const header = document.createElement("header");
header.className = "header";

const main = document.createElement("main");
main.className = "main";

const footer = document.createElement("footer");
footer.className = "footer";

document.body.append(header, main, footer);