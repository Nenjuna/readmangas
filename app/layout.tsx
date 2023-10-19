import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import { cn } from "@/lib/utils";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Online Manga Reader",
  description: "Best place to read all new manga chapters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
