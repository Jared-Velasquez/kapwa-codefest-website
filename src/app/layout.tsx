import "./globals.css";
import Navbar from "./components/Navbar";
import { CognitoProvider } from "@/app/auth/CognitoProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Kapwa Codefest</title>
      </head>

      <body>
        <CognitoProvider>
          <Navbar />

          {children}
        </CognitoProvider>
      </body>
    </html>
  );
}
