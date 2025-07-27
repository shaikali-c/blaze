import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Blaze",
  description: "Start Playing Now",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}  flex flex-col items-center h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
