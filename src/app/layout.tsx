import  "./globals.css";
import Navigation from "./components/navigation"

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">

        <body >
            <Navigation/>

        {children}
        </body>
        </html>
    );
}