import styles from "./Education.module.css";

export default function Education() {
  return (
    <section id="education" className={styles.section} aria-labelledby="edu-heading">
      <div className="container">
        <span className="section-label">Education &amp; Training</span>
        <h2 id="edu-heading" className={styles.heading}>
          Foundation &amp; growth
        </h2>

        <div className={styles.grid}>
          {/* Degree */}
          <article className={styles.card} aria-label="COMSATS University degree">
            <div className={styles.cardTop}>
              <div className={styles.iconWrap} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.cgpa}>
                <span className={styles.cgpaValue}>3.7</span>
                <span className={styles.cgpaLabel}>/4.0 CGPA</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.degreeTitle}>
                Bachelor of Science in Computer Science
              </h3>
              <p className={styles.institution}>
                COMSATS University Islamabad, Sahiwal Campus (CUI)
              </p>
              <div className={styles.meta}>
                <span className="tag">Feb 2022 – Jan 2026</span>
                <span className="tag tag--accent">Sahiwal, PK</span>
              </div>
            </div>
          </article>

          {/* Certification */}
          <article className={styles.card} aria-label="Samsung Innovation Campus certification">
            <div className={styles.cardTop}>
              <div className={`${styles.iconWrap} ${styles.iconWrapAccent}`} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path
                    d="M12 14c-4 0-7 2-7 4.5V20h14v-1.5C19 16 16 14 12 14z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M16 3.5l1 2 2 .3-1.5 1.4.4 2L16 8.1 13.9 9.2l.4-2L12.9 5.8l2-.3L16 3.5z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className={styles.certBadge}>
                <span className="mono">Certified</span>
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.degreeTitle}>
                Samsung Innovation Campus — AI/ML Program
              </h3>
              <p className={styles.institution}>
                Knowledge Stream Institute · Lahore, Pakistan
              </p>
              <div className={styles.meta}>
                <span className="tag">Jan 2026 – Apr 2026</span>
                <span className="tag tag--accent">AI/ML</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
