import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "../_context/theme-provider";

export const metadata: Metadata = {
  title: "vaibhav.dev",
  description: "Welcome To My Portfolio!",
};

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className={`${spaceMono.variable} bg-primary`}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
