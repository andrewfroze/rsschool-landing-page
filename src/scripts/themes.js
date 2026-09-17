let activeTheme;

const lightTheme = {
  text: {
    primary: "#403f3d",
    inverse: "#e1d4c9",
    accent: "#b0907a"
  },
  background: {
    page: "#e1d4c9",
    container: "#665f55",
    overlay: "#403F3DCC"
  },
  border: {
    primary: "#c1b6ad",
    inverse: "#665f55"
  },
  toggle: {
    hover: "#665f55"
  }
};

const darkTheme = {
  text: {
    primary: "#e1d4c9",
    inverse: "#e1d4c9",
    accent: "#b0907a"
  },
  background: {
    page: "#292826",
    container: "#403f3d",
    overlay: "#292826CC"
  },
  border: {
    primary: "#665f55",
    inverse: "#c1b6ad"
  },
  toggle: {
    hover: "#665f55"
  }
};

function loadActiveTheme() {
  activeTheme = localStorage.getItem("theme");

  if (!activeTheme || !["light", "dark"].includes(activeTheme)) {
    activeTheme = "light";
    localStorage.setItem("theme", activeTheme);
  }

  applyActiveTheme();
}

function saveSettings() {
  localStorage.setItem("theme", activeTheme);
}

function isDark() {
  return activeTheme === "dark";
}

function applyThemeSettings(theme) {
  document.documentElement.style.setProperty("--theme-text-primary", theme.text.primary);
  document.documentElement.style.setProperty("--theme-text-inverse", theme.text.inverse);
  document.documentElement.style.setProperty("--theme-text-accent", theme.text.accent);

  document.documentElement.style.setProperty("--theme-background-page", theme.background.page);
  document.documentElement.style.setProperty("--theme-background-container", theme.background.container);
  document.documentElement.style.setProperty("--theme-background-overlay", theme.background.overlay);

  document.documentElement.style.setProperty("--theme-border-primary", theme.border.primary);
  document.documentElement.style.setProperty("--theme-border-inverse", theme.border.inverse);
  document.documentElement.style.setProperty("--theme-toggle-hover", theme.toggle.hover);
}

function applyActiveTheme() {
  switch (activeTheme) {
    case "light":
      applyThemeSettings(lightTheme);
      break;
    case "dark":
      applyThemeSettings(darkTheme);
      break;
  }
}

function setActiveTheme(theme) {
  activeTheme = theme;
}

export { darkTheme, lightTheme, activeTheme, loadActiveTheme, saveSettings, isDark, applyThemeSettings, applyActiveTheme, setActiveTheme }