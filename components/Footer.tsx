import Image from "next/image";

const footerLinks = [
    { label: "GitHub", href: "https://github.com/madvillax" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma-432939271" },
    { label: "Email", href: "mailto:mohit.sharma80805@gmail.com" },
];

export default function Footer() {
    return (
        <footer className="border-t border-line bg-surface">
            <div className="grid min-h-[350px] grid-cols-[minmax(290px,0.72fr)_minmax(420px,1.28fr)] max-[760px]:grid-cols-1">
                <div className="relative z-10 flex flex-col justify-between border-r border-line p-9 max-[760px]:min-h-[320px] max-[760px]:border-r-0 max-[760px]:border-b max-[760px]:p-5">
                    <div>
                        <p className="m-0 font-mono text-[10px] font-bold tracking-[0.16em] text-faint uppercase">
                            Developer portfolio
                        </p>
                        <p className="mt-3 mb-0 font-sans text-[clamp(64px,8vw,122px)] leading-[0.82] font-semibold tracking-[-0.11em] text-ink">
                            Mohit
                        </p>
                    </div>

                    <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
                        {footerLinks.map((link) => (
                            <a
                                className="font-mono text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink"
                                href={link.href}
                                key={link.label}
                                target={link.href.startsWith("http") ? "_blank" : undefined}
                                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            >
                                [{link.label}]
                            </a>
                        ))}
                    </nav>
                </div>

                <div className="relative min-h-[350px] overflow-hidden bg-[#111118] max-[760px]:min-h-[190px]">
                    <Image
                        src="/footer-operation-doomsday-corrected.png"
                        alt="Pixel-art Operation Doomsday poster with a silver-masked hooded performer in a night city"
                        fill
                        sizes="(max-width: 760px) 100vw, 62vw"
                        className="object-cover object-[70%_32%] max-[760px]:object-contain"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-surface to-transparent max-[760px]:hidden" />
                </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-line px-9 py-3 font-mono text-[9px] text-faint max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-5">
                <p className="m-0">© {new Date().getFullYear()} Mohit Sharma</p>
                <p className="m-0">Built with Next.js and Tailwind CSS</p>
            </div>
        </footer>
    );
}
