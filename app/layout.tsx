import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#f4f4f1" },
        { media: "(prefers-color-scheme: dark)", color: "#181816" },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <a className="skip-link" href="#main-content">
                    Skip to content
                </a>
                <Navbar />
                <main id="main-content">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
