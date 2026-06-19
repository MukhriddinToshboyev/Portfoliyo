"use client";

import { useTranslation } from "react-i18next";
import "../../i18n/config";
import ThemeToggle from "@/src/shared/components/ThemeToggle";
import LanguageToggle from "@/src/shared/components/LanguageToggle";
import "./style.css";

export default function Home({ aboutRef, projectsRef, contactRef }) {
  const { t } = useTranslation();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="Home_container">
      <nav className="Home_navbar">
        <h2 className="Home_navbar_title">MT</h2>
        <section className="Home_navbar_btn">
          <button onClick={() => scrollToSection(aboutRef)}>
            {t("nav_about")}
          </button>
          <button onClick={() => scrollToSection(projectsRef)}>
            {t("nav_projects")}
          </button>
          <button onClick={() => scrollToSection(contactRef)}>
            {t("nav_contact")}
          </button>
          <ThemeToggle />
          <LanguageToggle />
        </section>
      </nav>

      <h2 className="Home_line"></h2>
    </div>
  );
}
