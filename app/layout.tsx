import type { Metadata } from "next";
import "./icomoon.css";
import "./draft.css";


export const metadata: Metadata = {
  title: "Inffluapp",
  description: "Inffluapp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}