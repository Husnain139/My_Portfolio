import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* CTA Band */}
      <div className={styles.ctaBand}>
        <div className={`${styles.ctaInner} container`}>
          <div className={styles.ctaText}>
            <h2 className={styles.ctaHeading}>
              Let&apos;s build something that matters.
            </h2>
            <p className={styles.ctaDesc}>
              Open to AI engineering roles, collaborations, and conversations about
              what&apos;s possible with LLMs, agents, and production AI.
            </p>
          </div>
          <a
            href="mailto:hussnainshafiq138@gmail.com"
            className={styles.ctaBtn}
            id="footer-contact-btn"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`${styles.bottom} container`}>
        <div className={styles.bottomLeft}>
          <span className={styles.logoMono}>MH</span>
          <span className={styles.copyright}>
            © {year} Muhammad Hussnain. All rights reserved.
          </span>
        </div>

        <div className={styles.links}>
          <a
            href="tel:+923186448059"
            className={styles.link}
            id="footer-phone-link"
            aria-label="Phone"
          >
            +92 318 644 8059
          </a>
          <a
            href="https://www.linkedin.com/in/hussnain-shafiq-b294711a9/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="footer-linkedin-link"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Husnain139"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            id="footer-github-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
