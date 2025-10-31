import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/app/_context/theme-provider";
import AssistiveTouch from "@/app/_ui/assistive-touch";

export const metadata: Metadata = {
  title: "Vaibhav Rawat — Portfolio",
  description: "Hello! I'm Vaibhav Rawat, a Full Stack Developer.",
  openGraph: {
    title: "Vaibhav Rawat — Portfolio",
    description: "Hello! I'm Vaibhav Rawat, a Full Stack Developer.",
    url: "https://vaibhavrawat.dev",
    siteName: "Vaibhav Rawat - Portfolio",
    images: [
      {
        url: "https://vaibhavrawat.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Rawat - Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Rawat — Portfolio",
    description: "Hello! I'm Vaibhav Rawat, a Full Stack Developer.",
    images: ["https://vaibhavrawat.dev/og-image.png"],
  },
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
