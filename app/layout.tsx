import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const displayFont = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

const bodyFont = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

export const metadata: Metadata = {
    title: {
        default: "Mohit Sharma | AI Full-stack Developer",
        template: "%s | Mohit Sharma",
    },
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
    colorScheme: "dark",
    themeColor: "#020202",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${displayFont.variable} ${bodyFont.variable}`}>
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
