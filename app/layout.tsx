import { ReactNode } from "react";
import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";

import NextTopLoader from "nextjs-toploader";

import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard Companies | Ziphonex",
  description: "Course by TarreDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={noto.className}>
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            {children}
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
