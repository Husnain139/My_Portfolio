import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Hussnain — AI Engineer",
  description: "Muhammad Hussnain is an AI Engineer building LLM automation, RAG systems, and agentic AI products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
