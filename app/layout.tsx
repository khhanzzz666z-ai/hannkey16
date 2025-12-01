import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HannKey Portfolio",
  description: "Creative Developer & Designer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
