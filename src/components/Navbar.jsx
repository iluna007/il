import { useEffect } from "react";

export default function Navbar({ lang, setLang, theme, setTheme }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handlePdfDownload = () => {
    const link = document.createElement("a");
    link.href = "/IKER_CV_ES.pdf";
    link.download = "IkerLuna_CV.pdf";
    link.click();
  };

  return (
    <nav className="navbar">
      <span className="navbar-name">Iker Luna Avilés</span>

      <div className="navbar-controls">
        <div className="toggle-group">
          <button
            className={lang === "es" ? "btn active" : "btn"}
            onClick={() => setLang("es")}
          >
            ES
          </button>
          <button
            className={lang === "en" ? "btn active" : "btn"}
            onClick={() => setLang("en")}
          >
            EN
          </button>
        </div>

        <div className="toggle-group">
          <button
            className={theme === "light" ? "btn active" : "btn"}
            onClick={() => setTheme("light")}
            title="Fondo blanco"
          >
            ◐
          </button>
          <button
            className={theme === "dark" ? "btn active" : "btn"}
            onClick={() => setTheme("dark")}
            title="Fondo negro"
          >
            ●
          </button>
        </div>

        <button className="btn btn-download" onClick={handlePdfDownload}>
          ↓ PDF
        </button>
      </div>
    </nav>
  );
}
