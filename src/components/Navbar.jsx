import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <nav className="navbar">
      <span className="navbar-name">Iker Luna</span>
    </nav>
  );
}
