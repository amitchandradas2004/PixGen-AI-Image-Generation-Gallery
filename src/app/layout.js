import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PixGen || AI Image Generation Gallery",
  description:
    "A modern AI-powered gallery platform where users can explore, view, and interact with AI-generated images.",
};

export default function RootLayout({ children }) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {" "}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
