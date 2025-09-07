import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Srinivas Muralidharan - Data Engineer & AI Scientist",
  description: "Passionate Data Engineer and AI Scientist specializing in transforming complex data into actionable insights. Expert in Azure, Databricks, PySpark, and machine learning.",
  keywords: "Data Engineer, AI Scientist, Machine Learning, Azure, Databricks, PySpark, NLP, Knowledge Graphs",
  authors: [{ name: "Srinivas Muralidharan" }],
  openGraph: {
    title: "Srinivas Muralidharan - Data Engineer & AI Scientist",
    description: "Passionate Data Engineer and AI Scientist specializing in transforming complex data into actionable insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
