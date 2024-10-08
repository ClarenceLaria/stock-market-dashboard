import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "./Components/Header";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stock Narket Dashboard",
  description: "Analize the stock market with this informative dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} dark:bg-slate-900 dark:text-white bg-white`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
// dark:bg-slate-900 dark:text-white