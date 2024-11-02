import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import Background from './../assets/pi-background.png';
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
  title: "Pi-Mainnet Validation",
  description: "Validate Pi- Mainnet with passphrase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
        <Image
          fill
          sizes="100%"
          src={Background}
          alt="Background"
          className="h-screen w-screen object-cover object-center"
        />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
