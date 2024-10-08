import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { FileText } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 flex items-center justify-between border-b px-8 py-2 shadow-sm bg-background">
            <div className="flex items-center justify-center">
              <FileText className="mr-2 h-8 w-8" />
              <h3>File Comparison</h3>
            </div>
            <ThemeToggle />
          </header>
          {children}
          <footer className="border-t py-2 flex justify-center items-center">
            <p className="muted">&copy;Rosager Productions</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
