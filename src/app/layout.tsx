import "./globals.css";
import Navbar from "./components/Navbar";
import { CognitoProvider } from "@/app/auth/CognitoProvider";
import { Toaster } from "sonner";

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
          <Toaster richColors position="bottom-center" />
        </CognitoProvider>
      </body>
    </html>
  );
}
