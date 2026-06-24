import { useMemo } from "react";
import { getNavSections, navSectionConfig } from "../data/navSections";
import { useActiveSection } from "../hooks/useScrollNav";

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SideNav({ lang }) {
  const navSections = getNavSections(lang);
  const sectionIds = useMemo(() => navSectionConfig.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);

  return (
    <nav className="side-nav" aria-label={lang === "es" ? "Secciones del CV" : "CV sections"}>
      <div className="side-nav__inner">
        {navSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={`side-nav__item ${activeId === section.id ? "is-active" : ""}`}
            onClick={() => scrollToSection(section.id)}
          >
            <span className="side-nav__num">{section.num}</span>
            <span className="side-nav__label">{section.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
