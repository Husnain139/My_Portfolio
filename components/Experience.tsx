import styles from "./Experience.module.css";

interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

const ROLES: Role[] = [
  {
    title: "AI Engineer",
    company: "Journal Post Group",
    location: "Lahore, Pakistan",
    period: "Apr 2026 – Present",
    type: "Onsite",
    bullets: [
      "Enhanced LLM-based automation apps using Python, LangChain, and FastAPI — cutting manual workflow effort by 40% across core business processes.",
      "Architected agentic AI workflows and RAG systems with real-time API data sources, achieving measurably improved response accuracy in production.",
      "Refined prompt engineering and inference pipelines, reducing response latency by ~30% while maintaining output quality across deployed models.",
      "Partnered with cross-functional teams of 5+ engineers to ship scalable, production-ready AI solutions for business automation.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Samsung Innovation Campus – Knowledge Stream",
    location: "Lahore, Pakistan",
    period: "Jan 2026 – Apr 2026",
    type: "Onsite",
    bullets: [
      "Performed EDA, preprocessing, and visualization using NumPy and Pandas across 10+ structured and unstructured datasets, surfacing key data quality issues.",
      "Implemented and compared supervised/unsupervised models (SVM, KNN, Decision Trees, K-Means) achieving best-in-class accuracy on 3 datasets.",
      "Constructed and evaluated deep learning architectures in TensorFlow and Keras, improving predictive accuracy by 15%+ through iterative tuning.",
      "Delivered 2 end-to-end ML projects from raw data ingestion through model deployment in agile team workflows.",
    ],
  },
  {
    title: "AI/ML Intern",
    company: "Cross Media Sol",
    location: "Lahore, Pakistan",
    period: "Jun 2025 – Sep 2025",
    type: "Onsite",
    bullets: [
      "Trained and evaluated ML/DL models using Python, TensorFlow, PyTorch, and Scikit-learn for real-world business automation.",
      "Built end-to-end data pipelines handling cleaning, preprocessing, and feature engineering for datasets of varying structure and scale.",
      "Boosted model accuracy and inference speed through systematic hyperparameter tuning, cutting inference time by ~20% on key production models.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="exp-heading">
      <div className="container">
        <div className={styles.sectionLabel}>
          <span className="section-label">Experience</span>
        </div>
        <h2 id="exp-heading" className={styles.heading}>
          Where I&apos;ve built
        </h2>

        <div className={styles.timeline}>
          {ROLES.map((role, i) => (
            <article key={i} className={styles.card} aria-label={`${role.title} at ${role.company}`}>
              {/* Timeline dot */}
              <div className={styles.dot} aria-hidden="true">
                <div className={styles.dotInner} />
              </div>

              <div className={styles.cardBody}>
                {/* Header */}
                <header className={styles.cardHeader}>
                  <div className={styles.titleGroup}>
                    <h3 className={styles.roleTitle}>{role.title}</h3>
                    <p className={styles.company}>{role.company}</p>
                  </div>
                  <div className={styles.metaGroup}>
                    <span className={styles.period}>{role.period}</span>
                    <div className={styles.badges}>
                      <span className="tag">{role.type}</span>
                      <span className="tag tag--accent">{role.location.split(",")[1].trim()}</span>
                    </div>
                  </div>
                </header>

                {/* Bullets */}
                <ul className={styles.bullets} role="list">
                  {role.bullets.map((b, j) => (
                    <li key={j} className={styles.bullet}>
                      <span className={styles.bulletDot} aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
