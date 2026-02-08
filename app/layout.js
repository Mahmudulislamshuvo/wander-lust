import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wanderlust - AI Trip Planner",
  description:
    "Plan your perfect trip with AI-powered itineraries tailored to your preferences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-white text-slate-600 antialiased selection:bg-emerald-100 selection:text-emerald-900 relative`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#ecfdf5_100%)]"></div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
