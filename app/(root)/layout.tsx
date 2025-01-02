import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/app/_context/theme-provider";
import AssistiveTouch from "@/app/_ui/assistive-touch";

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
      <body className={`${spaceMono.variable} relative bg-primary`}>
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
        <AssistiveTouch />
      </body>
    </html>
  );
}
