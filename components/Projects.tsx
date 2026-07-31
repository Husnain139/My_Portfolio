'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Projects.module.css";

interface Project {
  title: string;
  subtitle: string;
  tech: string[];
  bullets: string[];
  accent?: boolean;
  github?: string;
}

const PROJECTS: Project[] = [
  {
    title: "AI Agent Studio",
    subtitle: "Multi-model agentic platform with dynamic model routing",
    accent: true,
    github: "https://github.com/Husnain139/Agentic-AI-Studio",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Streamlit", "Groq", "OpenAI", "Tavily"],
    bullets: [
      "Built a multi-model agentic platform with LangGraph enabling dynamic switching between Groq (Llama 3.3) and OpenAI (GPT-4o-mini) with zero-downtime model routing.",
      "Integrated autonomous web search via Tavily API using ReAct architecture for grounded, real-time information retrieval.",
      "Designed decoupled full-stack architecture: FastAPI REST backend paired with a Streamlit glassmorphism UI, supporting concurrent user sessions.",
      "Ensured production-ready AI interactions through Pydantic validation and custom system prompt engineering.",
    ],
  },
  {
    title: "AirWave",
    subtitle: "Agentic AI Journalist — end-to-end content pipeline",
    github: "https://github.com/Husnain139/Agentic_AI_Researcher",
    tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Streamlit", "BrightData", "MCP", "ElevenLabs"],
    bullets: [
      "Constructed an end-to-end content pipeline scraping Reddit/Web data with BrightData, generating scripts via Claude AI, and converting to audio with ElevenLabs SDK.",
      "Implemented async rate limiting and exponential-backoff retry logic, reducing scraping failures by ~80% under high-load conditions.",
      "Delivered audio content via FastAPI backend supporting Base64 audio streaming through a custom Streamlit frontend.",
      "Leveraged MCP (Model Context Protocol) and LangChain tool adapters for dynamic, context-aware agent tool execution.",
    ],
  },
  {
    title: "AutoServify",
    subtitle: "Full-stack Android app connecting vehicle owners with repair shops",
    github: "https://github.com/Husnain139/Fyp-Project-Autoservify",
    tech: ["Kotlin", "Firebase", "XML", "Room DB", "MySQL", "Figma", "MVVM", "Dagger Hilt"],
    bullets: [
      "Engineered AutoServify, a full-stack Android application connecting vehicle owners with verified auto repair shops, built with Kotlin, Firebase, and MVVM architecture.",
      "Implemented role-based access control for admins, shop owners, and customers, featuring real-time appointment booking, spare parts marketplace, FCM push notifications, and Cloudinary image management.",
      "Utilized Dagger Hilt for dependency injection and Repository pattern for clean data layer separation, delivering a scalable solution for automotive service management.",
    ],
  },
  {
    title: "Fine-Tuning DeepSeek LLM",
    subtitle: "Domain-specific fine-tuning with LoRA/PEFT",
    github: "https://github.com/Husnain139/AI_Model_finetune_Deepseekr1",
    tech: ["Python", "HuggingFace", "Transformers", "LoRA", "PEFT", "NLP"],
    bullets: [
      "Fine-tuned a large language model using LoRA/PEFT for domain-specific text generation, reducing GPU memory usage by 70% to enable training on consumer-grade hardware.",
      "Built a complete pipeline covering tokenization, dataset preparation, training, evaluation, and inference.",
    ],
  },
  {
    title: "Agentic AI Chatbot (RAG)",
    subtitle: "Multi-step orchestration with counseling & emergency agents",
    tech: ["Python", "LangChain", "LangGraph", "FastAPI", "Twilio", "Google Gemini", "MedGemma"],
    bullets: [
      "Created an agentic AI system using RAG for intelligent decision-making with multi-step workflow orchestration and prompt management.",
      "Deployed specialized autonomous agents for empathetic counseling and emergency response, integrating Google Gemini and MedGemma via API-based deployment.",
    ],
  },
  {
    title: "AI Model with Vision & Voice",
    subtitle: "Multimodal medical Q&A with STT, vision, and voice output",
    github: "https://github.com/Husnain139/Healthcare_MultiModel-Chatbot",
    tech: ["Python", "Streamlit", "GROQ API", "Whisper STT", "gTTS", "Computer Vision"],
    bullets: [
      "Built a multimodal AI application combining LLM-based image understanding, Whisper speech-to-text, and gTTS voice output for real-time medical Q&A.",
      "Deployed inference endpoints via REST APIs, optimizing for low latency and high response quality.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  }),
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      key={index}
      className={`${styles.card} ${project.accent ? styles.cardAccent : ""}`}
      aria-label={project.title}
      id={`project-card-${index}`}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {project.accent && (
        <div className={styles.featuredBadge}>
          <span className="mono">featured</span>
        </div>
      )}

      <header className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSubtitle}>{project.subtitle}</p>
      </header>

      <ul className={styles.bullets} role="list">
        {project.bullets.map((b, j) => (
          <li key={j} className={styles.bullet}>
            <span className={styles.bulletArrow} aria-hidden="true">›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <footer className={styles.cardFooter}>
        <div className={styles.techStack} role="list" aria-label="Technologies used">
          {project.tech.map((t) => (
            <span key={t} className="tag" role="listitem">{t}</span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label={`View ${project.title} on GitHub`}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View on GitHub
          </a>
        )}
      </footer>
    </motion.article>
  );
}

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section id="projects" className={styles.section} aria-labelledby="proj-heading">
      <div className="container">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label">Projects</span>
          <h2 id="proj-heading" className={styles.heading}>
            Things I&apos;ve shipped
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
