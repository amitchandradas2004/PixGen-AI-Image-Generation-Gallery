import "./globals.css";
import { Poppins, Space_Grotesk } from "next/font/google";
import { Providers } from "@/app/Providers";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
const space = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      className={`${space.className} h-full antialiased light`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {" "}
        <Providers>
          <Navbar></Navbar>
          {children}
           <Toaster position="top-center" />
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
