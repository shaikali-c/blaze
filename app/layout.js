import { Inter } from "next/font/google";
import "./globals.css";
import Searchbar from "@/components/search";

const inter = Inter();

export const metadata = {
  title: "Blaze",
  description: "Start Playing Now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
