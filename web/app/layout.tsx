import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "WTH",
  description: "What The Hack",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>
        <nav className="bg-black text-white text-md lg:text-xl flex justify-between max-w-full px-5 pt-8 ">
          <Image className="lg:w-16 lg:h-10 w-12 h-6"
            src="/logo.png"
            alt="startup template"
            width={100}
            height={100}
          />
          <div className="flex gap-4 lg:gap-10 pl-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/problemStatement">PS</Link>
            <Link href="/timeline">Timeline</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
