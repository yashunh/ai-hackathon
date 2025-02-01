import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-black text-white text-xl flex max-w-full justify-between lg:px-20 pt-8 px-3">
          <div>logo</div>
          <div className="flex gap-6 lg:gap-10 pl-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/theme">PS</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/contact">Contact</Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
