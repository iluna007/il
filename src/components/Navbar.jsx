import { useEffect } from "react";

export default function Navbar({ lang, setLang, theme, setTheme }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
      </div>
    </nav>
  );
}
