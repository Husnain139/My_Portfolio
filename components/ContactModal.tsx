"use client";

import React, { useState, useEffect, useRef } from "react";
import { useContact } from "@/lib/ContactContext";
import styles from "./ContactModal.module.css";

interface Message {
  sender: "bot" | "user";
  text: string;
}

interface FormState {
  step: "idle" | "name" | "email" | "message" | "confirm";
  name: string;
  email: string;
  messageText: string;
}

const QUICK_PROMPTS = [
  "What is your tech stack?",
  "Tell me about your AI Agent Studio.",
  "What is your work experience?",
  "Are you open to job opportunities?",
  "I want to send you a message.",
];

export default function ContactModal() {
  const { isOpen, closeContact } = useContact();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  // Conversational Form Collection State
  const [formState, setFormState] = useState<FormState>({
    step: "idle",
    name: "",
    email: "",
    messageText: "",
  });

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chat when modal opens
  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          sender: "bot",
          text: "Hi there! I'm Hussnain's AI Twin 🤖. Ask me anything about his skills, experience, projects, or select 'I want to send you a message' to get in touch!",
        },
      ]);
      setFormState({
        step: "idle",
        name: "",
        email: "",
        messageText: "",
      });
      // Focus input
      setTimeout(() => inputRef.current?.focus(), 100);
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeContact();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [closeContact]);

  if (!isOpen) return null;

  // Bot Knowledge-Base response logic
  const getBotResponse = (input: string): string => {
    const query = input.toLowerCase();

    if (query.includes("stack") || query.includes("technology") || query.includes("languages") || query.includes("skills")) {
      return `Hussnain's technical stack is specialized for production AI:\n\n` +
        `• LLM & Agents: LangChain, LangGraph, OpenAI/Claude APIs, Groq, MCP, RAG, FastAPI\n` +
        `• AI & ML: PyTorch, TensorFlow, HuggingFace, Unsloth, LoRA/PEFT, Scikit-learn\n` +
        `• Languages: Python (primary), SQL, JavaScript, HTML/CSS, Kotlin, Java, C++\n` +
        `• DevOps: Git, Docker, AWS, Google Colab`;
    }

    if (query.includes("agent studio") || query.includes("studio") || query.includes("projects") || query.includes("built") || query.includes("shipped")) {
      if (query.includes("agent studio")) {
        return `AI Agent Studio is one of Hussnain's featured projects:\n\n` +
          `It is a multi-model agentic platform with LangGraph, enabling zero-downtime dynamic routing between Groq (Llama 3.3) and OpenAI (GPT-4o-mini). It includes autonomous web search via Tavily using ReAct architecture, FastAPI backend, and Streamlit UI.`;
      }
      return `Here are some of Hussnain's top projects:\n\n` +
        `1. AI Agent Studio: LangGraph + FastAPI + Streamlit multi-model routing platform.\n` +
        `2. AirWave (AI Journalist): Content pipeline scraping web/Reddit (BrightData), generating script (Claude), and audio streaming (ElevenLabs).\n` +
        `3. AutoServify: Full-stack Kotlin & Firebase Android app for repair shop booking.\n` +
        `4. DeepSeek Fine-Tuning: Parameter-efficient tuning using LoRA/PEFT on HuggingFace.\n\n` +
        `Which one would you like to know more about?`;
    }

    if (query.includes("experience") || query.includes("work") || query.includes("job") || query.includes("company") || query.includes("employer")) {
      return `Hussnain's professional experience includes:\n\n` +
        `• AI Engineer at Journal Post Group (Lahore, PK | Apr 2026 - Present)\n` +
        `  Enhanced LLM automation apps with Python/FastAPI/LangChain. Cut manual workflow effort by 40% and reduced latency by 30%.\n\n` +
        `• AI/ML Intern at Samsung Innovation Campus (Jan 2026 - Apr 2026)\n` +
        `  Built ML models (SVM, KNN, Decision Trees, K-Means) and deep learning in TensorFlow, improving accuracy by 15%.\n\n` +
        `• AI/ML Intern at Cross Media Sol (Jun 2025 - Sep 2025)\n` +
        `  Trained ML/DL models and designed preprocessing data pipelines.`;
    }

    if (query.includes("open") || query.includes("hire") || query.includes("opportunity") || query.includes("job") || query.includes("work with")) {
      return `Yes, Hussnain is actively open to AI engineering and LLM system architecture roles! He is looking for opportunities to deploy production-grade agentic AI and LLM workflows. Let's get you in touch with him! Let's start by entering your name.`;
    }

    if (query.includes("education") || query.includes("university") || query.includes("comsats") || query.includes("degree")) {
      return `Hussnain graduated with a Bachelor of Science in Computer Science from COMSATS University Islamabad (Sahiwal Campus) in Jan 2026, achieving a strong CGPA of 3.7/4.0.`;
    }

    if (query.includes("hello") || query.includes("hi") || query.includes("hey") || query.includes("greet")) {
      return `Hello! How can I help you today? I can share details about Hussnain's projects, technical skills, job experience, or help you write a direct message to him.`;
    }

    return `I'm Hussnain's AI Twin. I've noted that! To make sure you get a precise answer, you can ask about: \n` +
      `• Work experience\n• AI projects (like AI Agent Studio)\n• Core skills and tech stack\n• Education\n\nOr click "I want to send you a message" to drop him an email!`;
  };

  // Process user message sending
  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // 1. Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    // Simulated network/typing delay
    await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 600));
    setIsTyping(false);

    // 2. Form/Contact Flow Logic
    if (formState.step !== "idle") {
      handleFormFlow(text);
      return;
    }

    // Check if user wants to contact
    if (
      text === "I want to send you a message." ||
      text.toLowerCase().includes("contact") ||
      text.toLowerCase().includes("send a message") ||
      text.toLowerCase().includes("message hussnain") ||
      text.toLowerCase().includes("hire")
    ) {
      setFormState({
        step: "name",
        name: "",
        email: "",
        messageText: "",
      });
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "I'd love to help you get in touch with Hussnain! Let's draft a message. First, what is your name?",
        },
      ]);
      return;
    }

    // Default Q&A response
    const botResponse = getBotResponse(text);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
  };

  // Conversational contact form collection logic
  const handleFormFlow = (userInput: string) => {
    switch (formState.step) {
      case "name":
        setFormState((prev) => ({ ...prev, step: "email", name: userInput }));
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Nice to meet you, ${userInput}! What is your email address so Hussnain can write back to you?`,
          },
        ]);
        break;

      case "email":
        setFormState((prev) => ({ ...prev, step: "message", email: userInput }));
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Perfect. What message, question, or opportunity description would you like to send?",
          },
        ]);
        break;

      case "message":
        const finalMsg = userInput;
        setFormState((prev) => ({
          ...prev,
          step: "confirm",
          messageText: finalMsg,
        }));
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Excellent! I've prepared your message package. Ready to compile and submit?",
          },
        ]);
        break;

      default:
        break;
    }
  };

  // Triggers the mailto action
  const triggerMailto = () => {
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(
      `Hello Hussnain,\n\n${formState.messageText}\n\nBest regards,\n${formState.name}\nEmail: ${formState.email}`
    );
    window.open(`mailto:hussnainshafiq138@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setFormState((prev) => ({ ...prev, step: "confirm" }));
    // Transition to success layout
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, step: "confirm" }));
      // Complete flow
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Message sent trigger active! Opening email client...",
        },
      ]);
    }, 200);
  };

  const isFormActive = formState.step !== "idle";
  const isFormConfirm = formState.step === "confirm";

  return (
    <div className={styles.overlay} onClick={closeContact}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.botInfo}>
            <div className={styles.avatar}>MH</div>
            <div className={styles.titleGroup}>
              <span className={styles.botName}>Hussnain&apos;s AI Twin</span>
              <div className={styles.statusRow}>
                <span className={styles.statusDot} />
                <span className={styles.statusText}>online · helper bot</span>
              </div>
            </div>
          </div>
          <button
            className={styles.closeBtn}
            onClick={closeContact}
            aria-label="Close contact modal"
            id="close-contact-modal-btn"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </header>

        {/* Success state */}
        {isFormConfirm ? (
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className={styles.successHeading}>Ready to Send!</h3>
            <p className={styles.successText}>
              I have compiled your message. Click below to launch your email app and send it directly to Hussnain.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                className={styles.successBtn}
                style={{ backgroundColor: "var(--primary)", borderColor: "var(--primary)" }}
                onClick={triggerMailto}
              >
                Send Email Now
              </button>
              <button
                className={styles.successBtn}
                onClick={() => {
                  navigator.clipboard.writeText(
                    `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.messageText}`
                  );
                  alert("Message copied to clipboard!");
                }}
              >
                Copy Content
              </button>
            </div>
            <button
              className={styles.successBtn}
              style={{ marginTop: "24px", opacity: 0.6, fontSize: "12px", padding: "6px 12px" }}
              onClick={() => {
                setFormState({ step: "idle", name: "", email: "", messageText: "" });
                setMessages((prev) => [
                  ...prev,
                  { sender: "bot", text: "Form reset. How else can I help you?" },
                ]);
              }}
            >
              Start Over
            </button>
          </div>
        ) : (
          <>
            {/* Chat Messages */}
            <div className={styles.chatArea}>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`${styles.messageRow} ${
                    msg.sender === "user" ? styles.messageRowUser : ""
                  }`}
                >
                  <div
                    className={`${styles.messageBubble} ${
                      msg.sender === "user" ? styles.messageBubbleUser : styles.messageBubbleBot
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className={styles.messageRow}>
                  <div className={`${styles.messageBubble} ${styles.messageBubbleBot}`}>
                    <div className={styles.typingIndicator}>
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                      <span className={styles.typingDot} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompts Chips */}
            {!isFormActive && !isTyping && (
              <div className={styles.chipsContainer}>
                {QUICK_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    className={styles.chip}
                    onClick={() => handleSendMessage(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Text Input area */}
            <form
              className={styles.inputArea}
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
            >
              <input
                ref={inputRef}
                type={formState.step === "email" ? "email" : "text"}
                className={styles.inputField}
                placeholder={
                  formState.step === "name"
                    ? "Enter your name..."
                    : formState.step === "email"
                    ? "Enter your email..."
                    : formState.step === "message"
                    ? "Type your message..."
                    : "Ask about Hussnain..."
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isTyping}
                aria-label="Chat input message"
              />
              <button
                type="submit"
                className={styles.sendBtn}
                disabled={isTyping || !inputValue.trim()}
                aria-label="Send message"
                id="send-message-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
