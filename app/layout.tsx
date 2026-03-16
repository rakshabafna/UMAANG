import type { Metadata } from "next";
import { Nunito, Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import { Toast } from "@/components/ui/Toast";
import { ChatBot } from "@/components/ui/ChatBot";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UMAANG - SpacECE Landing",
  description:
    "A unified platform for tracking early childhood development, supporting families, and empowering volunteers across Maharashtra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet" />
      </head>
      <body
        className={`${nunito.variable} ${inter.variable} font-inter antialiased bg-[#FFF8F0] text-slate-900 min-h-screen`}
      >
        <AppProvider>
          {children}
          <Toast />
          <ChatBot />
        </AppProvider>
      </body>
    </html>
  );
}
