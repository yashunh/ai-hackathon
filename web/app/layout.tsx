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
        <nav className="bg-black text-white text-xl flex justify-between px-20 pt-8">
          <div>logo</div>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/theme">Theme</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/prize">Prize</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
