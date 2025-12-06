import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zelivra - Farming Cost Control",
  description: "Calculate and control your farming production costs with precision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
