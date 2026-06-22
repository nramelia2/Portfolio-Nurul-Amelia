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
  metadataBase: new URL("https://nurul-amelia.vercel.app"),

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

  authors: [{ name: "Nurul Amelia" }],
  creator: "Nurul Amelia",

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  openGraph: {
    title: "Nurul Amelia | Data Engineer",
    description:
      "Data Engineer, Data Analyst, and AI Research Enthusiast.",
    url: "https://nurul-amelia.vercel.app",
    siteName: "Nurul Amelia Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurul Amelia Portfolio",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nurul Amelia | Data Engineer",
    description:
      "Data Engineer, Data Analyst, and AI Research Enthusiast.",
    images: ["/og-image.png"],
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