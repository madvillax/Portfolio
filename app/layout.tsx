import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const themeScript = `
    try {
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme === "light" || savedTheme === "dark") {
            document.documentElement.dataset.theme = savedTheme;
        }
    } catch {}
`;

export const metadata: Metadata = {
    title: "Mohit Sharma",
    description:
        "Mohit Sharma builds useful AI products and thoughtful full-stack systems.",
    openGraph: {
        title: "Mohit Sharma | AI Full-stack Developer",
        description:
            "Selected work in AI products, developer tools, and full-stack engineering.",
        type: "website",
    },
};

export const viewport: Viewport = {
    colorScheme: "dark light",
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#131313" },
        { media: "(prefers-color-scheme: light)", color: "#f3eee3" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                <div className="site-frame">
                    <Navbar />
                    <main id="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
