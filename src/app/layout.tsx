import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Filipino American Hackathon</title>
      </head>

      <body>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
