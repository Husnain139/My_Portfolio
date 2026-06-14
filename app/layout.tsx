import type { Metadata } from "next";
import "./globals.css";
import { ContactProvider } from "@/lib/ContactContext";
import ContactModal from "@/components/ContactModal";

export const metadata: Metadata = {
  title: "Muhammad Hussnain — AI Engineer",
  description:
    "Portfolio of Muhammad Hussnain, an AI Engineer specializing in LLMs, LangChain, RAG systems, agentic AI, and full-stack AI application development.",
  keywords: [
    "AI Engineer",
    "LangChain",
    "LangGraph",
    "RAG",
    "LLM",
    "Python",
    "FastAPI",
    "Muhammad Hussnain",
  ],
  authors: [{ name: "Muhammad Hussnain" }],
  openGraph: {
    title: "Muhammad Hussnain — AI Engineer",
    description:
      "AI Engineer specializing in LLMs, agentic AI, and production-grade AI systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800;900&family=Geist+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ContactProvider>
          {children}
          <ContactModal />
        </ContactProvider>
      </body>
    </html>
  );
}
