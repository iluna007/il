import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { getNavSections, navSectionConfig } from "../data/navSections";
import { scrollToSection, useActiveSection } from "../hooks/useScrollNav";

function handleSectionSelect(id, setOpen) {
  setOpen(false);

  // Wait for body overflow to unlock after the menu closes.
  window.setTimeout(() => {
    scrollToSection(id);
  }, 50);
}

export default function MobileNav({ lang }) {
  const navSections = getNavSections(lang);
  const sectionIds = useMemo(() => navSectionConfig.map((s) => s.id), []);
  const activeId = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const activeSection = navSections.find((s) => s.id === activeId);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        className="mobile-nav__toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className="mobile-nav__current">
          {activeSection?.num} · {activeSection?.label}
        </span>
        <span className="mobile-nav__chevron" aria-hidden="true">
          {open ? "▲" : "▼"}
        </span>
      </button>

      {open &&
        createPortal(
          <button
            type="button"
            className="mobile-nav__backdrop"
            onClick={() => setOpen(false)}
            aria-label={lang === "es" ? "Cerrar menú" : "Close menu"}
          />,
          document.body
        )}

      {open && (
        <div className="mobile-nav__menu" role="listbox">
          {navSections.map((section) => (
            <button
              key={section.id}
              type="button"
              role="option"
              aria-selected={activeId === section.id}
              className={`mobile-nav__item ${activeId === section.id ? "is-active" : ""}`}
              onClick={() => handleSectionSelect(section.id, setOpen)}
            >
              <span>{section.num}</span>
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
