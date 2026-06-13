import styles from "./Skills.module.css";

interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "LLM & Agentic AI",
    icon: "◈",
    skills: [
      "LangChain", "LangGraph", "OpenAI API", "Anthropic Claude API",
      "Groq", "MCP", "RAG", "Prompt Engineering", "FastAPI", "Streamlit",
    ],
  },
  {
    category: "AI & ML Frameworks",
    icon: "⬡",
    skills: [
      "TensorFlow", "Keras", "PyTorch", "Scikit-learn",
      "HuggingFace Transformers", "Unsloth", "LoRA/PEFT", "TRL", "W&B",
    ],
  },
  {
    category: "Data & ML Tools",
    icon: "◉",
    skills: [
      "NumPy", "Pandas", "Matplotlib", "OpenCV",
      "EDA", "Feature Engineering", "Hyperparameter Tuning",
    ],
  },
  {
    category: "Languages",
    icon: "⟨⟩",
    skills: ["Python", "SQL", "JavaScript", "HTML/CSS", "Java", "Kotlin", "C++", "C#", "PHP"],
  },
  {
    category: "DevOps & Tools",
    icon: "⊡",
    skills: ["Git", "Docker", "AWS", "VS Code", "PyCharm", "Google Colab"],
  },
  {
    category: "Speech & Audio",
    icon: "◎",
    skills: ["Whisper STT", "gTTS", "ElevenLabs SDK"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className="container">
        <span className="section-label">Skills</span>
        <h2 id="skills-heading" className={styles.heading}>
          What I work with
        </h2>

        <div className={styles.grid}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.category} className={styles.group}>
              <header className={styles.groupHeader}>
                <span className={styles.groupIcon} aria-hidden="true">{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
              </header>
              <ul className={styles.skillList} role="list" aria-label={`${group.category} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
