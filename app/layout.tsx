import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const BricolageGrotesque = localFont({
    src: "../public/fonts/BricolageGrotesque-Latin-Variable.woff2",
    variable: "--font-bricolage-grotesque",
    weight: "200 800",
    display: "swap",
});

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
    colorScheme: "dark",
    themeColor: "#0b0b0b",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${BricolageGrotesque.variable} ${GeistMono.variable} m-0 text-[15px] leading-[1.6]`}>
                <a
                    className="fixed top-3 left-3 z-30 -translate-y-[160%] rounded-[4px] bg-ink px-3 py-2 text-xs text-button-ink transition-transform focus:translate-y-0"
                    href="#main-content"
                >
                    Skip to content
                </a>
                <div className="mx-[clamp(24px,8vw,120px)] min-h-dvh border-x border-line bg-surface max-[760px]:mx-0 max-[760px]:border-x-0">
                    <Navbar />
                    <main id="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
