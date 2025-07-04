import QueryProvider from "@providers/QueryProvider";
import { ReactPlugin } from "@stagewise-plugins/react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { ThemeProvider } from "@repo/ui/components/theme-provider";

import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const stagewiseConfig = {
  plugins: [ReactPlugin],
};

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={geist.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </QueryProvider>
  );
}
