const THEME_VARS = [
  "--bg",
  "--text",
  "--text-muted",
  "--accent",
  "--border",
  "--nav-bg",
  "--nav-border",
  "--btn-active-bg",
  "--btn-active-text",
  "--link-color",
  "--bio-bg",
];

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16),
  };
}

function getLuminance(hex) {
  const { r, g, b } = hexToRgb(hex);
  const [rs, gs, bs] = [r, g, b].map((channel) => {
    const s = channel / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

export function getCustomThemeVars(hex) {
  const isLight = getLuminance(hex) > 0.5;
  const mix = (amount, target = isLight ? "#000000" : "#ffffff") =>
    `color-mix(in srgb, ${hex} ${100 - amount}%, ${target} ${amount}%)`;

  return {
    "--bg": hex,
    "--text": isLight ? "#111111" : "#f0f0f0",
    "--text-muted": isLight ? "#555555" : "#aaaaaa",
    "--accent": isLight ? "#111111" : "#f0f0f0",
    "--border": mix(18),
    "--nav-bg": mix(6),
    "--nav-border": mix(14),
    "--btn-active-bg": isLight ? "#111111" : "#f0f0f0",
    "--btn-active-text": isLight ? "#ffffff" : "#0a0a0a",
    "--link-color": isLight ? "#0056b3" : "#6ab0f5",
    "--bio-bg": mix(10),
  };
}

export function applyTheme(theme, customColor) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);

  if (theme === "custom" && customColor) {
    const vars = getCustomThemeVars(customColor);
    Object.entries(vars).forEach(([key, value]) => root.style.setProperty(key, value));
    root.style.colorScheme = getLuminance(customColor) > 0.5 ? "light" : "dark";
    return;
  }

  THEME_VARS.forEach((key) => root.style.removeProperty(key));
  root.style.colorScheme = theme === "dark" ? "dark" : "light";
}

export { THEME_VARS };
