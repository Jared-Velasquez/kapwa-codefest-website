import  "./globals.css";
import Navigation from "./components/navigation"

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">

        <body>
        <div className="fixed top-0 right-0 left-0 z-100">
            <Navigation/>
        </div>

        {children}
        </body>
        </html>
    );
}