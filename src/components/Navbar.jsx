import { useEffect } from "react";
import { applyTheme } from "../utils/themeColor";

export default function Navbar({
  lang,
  setLang,
  theme,
  setTheme,
  customColor,
  setCustomColor,
}) {
  useEffect(() => {
    applyTheme(theme, customColor);
  }, [theme, customColor]);

  const handleColorChange = (event) => {
    setCustomColor(event.target.value);
    setTheme("custom");
  };

  return (
    <nav className="navbar">
      <div className="navbar-controls">
        <div className="toggle-group" role="group" aria-label={lang === "es" ? "Idioma" : "Language"}>
          <button
            type="button"
            className={lang === "es" ? "btn active" : "btn"}
            onClick={() => setLang("es")}
            aria-pressed={lang === "es"}
          >
            ES
          </button>
          <button
            type="button"
            className={lang === "en" ? "btn active" : "btn"}
            onClick={() => setLang("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>

        <div className="toggle-group" role="group" aria-label={lang === "es" ? "Tema" : "Theme"}>
          <button
            type="button"
            className={theme === "light" ? "btn active" : "btn"}
            onClick={() => setTheme("light")}
            title={lang === "es" ? "Fondo blanco" : "Light background"}
            aria-pressed={theme === "light"}
            aria-label={lang === "es" ? "Tema claro" : "Light theme"}
          >
            ◐
          </button>
          <button
            type="button"
            className={theme === "dark" ? "btn active" : "btn"}
            onClick={() => setTheme("dark")}
            title={lang === "es" ? "Fondo negro" : "Dark background"}
            aria-pressed={theme === "dark"}
            aria-label={lang === "es" ? "Tema oscuro" : "Dark theme"}
          >
            ●
          </button>
        </div>

        <div className="toggle-group color-picker-group" role="group" aria-label={lang === "es" ? "Color de fondo" : "Background color"}>
          <label
            className={`btn btn-color ${theme === "custom" ? "active" : ""}`}
            title={lang === "es" ? "Elegir color de fondo" : "Choose background color"}
          >
            <span className="color-wheel-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <defs>
                  <linearGradient id="wheel-a" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b" />
                    <stop offset="50%" stopColor="#ffd93d" />
                    <stop offset="100%" stopColor="#6bcbff" />
                  </linearGradient>
                </defs>
                <circle cx="12" cy="12" r="9" fill="url(#wheel-a)" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="12" cy="12" r="3.5" fill={customColor} stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
            <input
              type="color"
              className="color-picker-input"
              value={customColor}
              onChange={handleColorChange}
              aria-label={lang === "es" ? "Selector de color de fondo" : "Background color picker"}
            />
          </label>
        </div>
      </div>
    </nav>
  );
}
