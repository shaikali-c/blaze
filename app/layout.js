import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Nav from "@/components/navigation/nav";

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
      <body className={`${inter.className}  flex flex-col h-screen`}>
        <Header />
        <main className="h-screen w-screen flex md:justify-center mt-8">
          <Nav />
          <section className="md:max-h-screen md:w-1/3 md:overflow-y-auto flex mt-8">
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
