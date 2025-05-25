import  "./globals.css";
import Navigation from "./components/navigation"

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

        <body >
            <Navigation/>

        {children}
        </body>
        </html>
    );
}