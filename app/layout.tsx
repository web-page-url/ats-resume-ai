import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ResumeCraft | ATS-Friendly AI Resume Builder",
  description: "Create a resume that gets you hired. ATS-friendly, recruiter-approved, and designed to make you feel confident.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bg-light dark:bg-bg-dark text-text-primary dark:text-text-invert min-h-screen relative overflow-x-hidden`}
      >
        {/* Decorative background orbs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

