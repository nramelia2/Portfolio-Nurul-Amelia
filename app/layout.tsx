import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurul Amelia | Data Engineer",

  description:
    "Data Engineer, Data Analyst, and AI Research Enthusiast with experience in ETL pipelines, KPI monitoring, dashboard development, and AI research.",

  keywords: [
    "Nurul Amelia",
    "Data Engineer",
    "Data Analyst",
    "Python",
    "SQL",
    "ETL",
    "Power BI",
    "Machine Learning",
    "Computer Vision",
  ],

  authors: [
    {
      name: "Nurul Amelia",
    },
  ],

  creator: "Nurul Amelia",

  openGraph: {
    title: "Nurul Amelia | Data Engineer",
    description:
      "Data Engineer, Data Analyst, and AI Research Enthusiast.",
    type: "website",
  },

  icons: {
    icon: "/projects/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          min-h-full
          flex
          flex-col
          bg-white
          text-slate-900
          dark:bg-slate-950
          dark:text-white
        "
      >
        {children}
      </body>
    </html>
  );
}