import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./contexts/ThemeContext";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Srinivas Muralidharan - Data Specialist & Architect",
  description: "Senior Data Specialist and Architect transforming complex data into scalable solutions and actionable insights.",
  keywords: "Data Specialist, Data Architect, Data Engineering, AI, Strategy",
  authors: [{ name: "Srinivas Muralidharan" }],
  openGraph: {
    title: "Srinivas Muralidharan - Data Specialist & Architect",
    description: "Senior Data Specialist and Architect transforming complex data into scalable solutions and actionable insights.",
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
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} font-sans antialiased text-slate-800 bg-white dark:bg-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
