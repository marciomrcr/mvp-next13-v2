import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-800 text-gray-100" lang="pt-BR">
      <body>
        <header className="">
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
