"use client";
import { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { useContact } from "@/lib/ContactContext";

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { openContact } = useContact();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <nav className={`${styles.nav} container`} aria-label="Primary navigation">
        <a href="#" className={styles.logo} aria-label="Muhammad Hussnain — home">
          <span className={styles.logoMono}>MH</span>
          <span className={styles.logoDot} aria-hidden="true" />
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.link} ${
                  activeSection === href.replace("#", "") ? styles.active : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setMenuOpen(false);
                openContact();
              }}
              className={styles.cta}
              id="nav-contact-btn"
            >
              Get in touch
            </button>
          </li>
        </ul>

        <button
          className={styles.burger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          id="nav-burger-btn"
        >
          <span className={`${styles.burgerBar} ${menuOpen ? styles.burgerOpen : ""}`} />
        </button>
      </nav>
    </header>
  );
}
