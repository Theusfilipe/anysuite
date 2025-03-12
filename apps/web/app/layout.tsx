import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import theme from "./theme";
import { ThemeProvider } from '@mui/material/styles';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});



export const metadata: Metadata = {
  title: "AnySystems",
  description: "A suit of Systems for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
    </ThemeProvider>
    
  );
}
