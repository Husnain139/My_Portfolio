'use client';

import styles from "./Hero.module.css";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Introduction">
      {/* Radial glow */}
      <div className={styles.glow} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        {/* Left: text content */}
        <div className={styles.textCol}>
          {/* Status badge */}
          <motion.div
            className={styles.statusBadge}
            role="status"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className={styles.statusDot} aria-hidden="true" />
            <span className="mono">Available for opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className={styles.name}
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Muhammad
            <br />
            <span className={styles.nameHighlight}>Hussnain</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            className={styles.role}
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            AI Engineer &amp; LLM Systems Architect
          </motion.p>

          {/* Description */}
          <motion.p
            className={styles.description}
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Building production-grade agentic AI, RAG systems, and LLM-powered
            automation. I architect intelligent systems that cut workflow effort,
            reduce latency, and ship on time.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className={styles.ctas}
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <a
              href="#projects"
              className={styles.ctaPrimary}
              id="hero-projects-btn"
            >
              View Projects
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <a
              href="/resume.pdf"
              download="Muhammad_Hussnain_CV.pdf"
              className={styles.ctaDownload}
              id="hero-download-cv-btn"
              aria-label="Download CV"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3v13M5 16l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Download CV
            </a>

            <a
              href="mailto:hussnainshafiq138@gmail.com"
              className={styles.ctaSecondary}
              id="hero-contact-btn"
            >
              hussnainshafiq138@gmail.com
            </a>
          </motion.div>

          {/* Contact row */}
          <motion.div
            className={styles.contactRow}
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <a
              href="tel:+923186448059"
              className={styles.contactItem}
              id="hero-phone-link"
              aria-label="Phone number"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011 2.22 2 2 0 012.96 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +92 318 644 8059
            </a>

            <a
              href="https://www.linkedin.com/in/hussnain-shafiq-b294711a9/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              id="hero-linkedin-link"
              aria-label="LinkedIn profile"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

            <a
              href="https://github.com/Husnain139"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactItem}
              id="hero-github-link"
              aria-label="GitHub profile"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          </motion.div>
        </div>

        {/* Right: Profile photo */}
        <motion.div
          className={styles.photoCol}
          initial={{ opacity: 0, scale: 0.92, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.photoCard}>
            <Spotlight className="-top-20 left-0 md:left-10" fill="white" />

            {/* Photo frame */}
            <div className={styles.photoFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hussnain.jpg"
                alt="Muhammad Hussnain — AI Engineer"
                className={styles.photo}
              />
              {/* Name badge */}
              <div className={styles.photoBadge}>
                <span className={styles.photoBadgeName}>Muhammad Hussnain</span>
                <span className={styles.photoBadgeRole}>AI Engineer</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
