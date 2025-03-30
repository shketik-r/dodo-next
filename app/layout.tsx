import { Nunito } from "next/font/google";
import "./globals.css";

const geistNunito = Nunito({
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  subsets: ["cyrillic"],
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <link data-rh="true" rel="icon" href="logo.png" />
      </head>
      <body className={`${geistNunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
