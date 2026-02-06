import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalDisclaimerBanner } from "./components/GlobalDisclaimerBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Giáo dục Dinh dưỡng Lâm sàng & Công cụ",
  description:
    "Nền tảng giáo dục công cộng giải thích các khái niệm dinh dưỡng lâm sàng và cung cấp công cụ tương tác hỗ trợ (nhưng không thay thế) tư duy lâm sàng.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalDisclaimerBanner />
        {children}
      </body>
    </html>
  );
}
