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
    icons: {
        icon: { url: "/profile.jpg", type: "image/jpeg" },
        apple: "/profile.jpg",
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
    colorScheme: "dark light",
};

// Restore the preference before paint. This meta tag is owned by the theme UI
// so React's route metadata does not replace the visitor's selected color.
const themeScript = `
    let theme = "dark";
    try {
        if (localStorage.getItem("portfolio-theme") === "light") theme = "light";
    } catch {}
    document.documentElement.dataset.theme = theme;
    const themeColor = document.createElement("meta");
    themeColor.name = "theme-color";
    themeColor.content = theme === "light" ? "#fafafa" : "#0b0b0b";
    document.head.appendChild(themeColor);
`;

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
            <body className={`${BricolageGrotesque.variable} ${GeistMono.variable} m-0 text-[15px] leading-[1.6]`}>
                <a
                    className="fixed top-3 left-3 z-30 -translate-y-[160%] rounded-[4px] bg-ink px-3 py-2 text-xs text-button-ink transition-transform focus:translate-y-0"
                    href="#main-content"
                >
                    Skip to content
                </a>
                <div className="mx-[clamp(32px,14vw,210px)] min-h-dvh border-x border-line bg-surface max-[760px]:mx-0 max-[760px]:border-x-0">
                    <Navbar />
                    <main id="main-content">{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
