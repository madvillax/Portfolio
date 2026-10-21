import Link from "next/link";
import {
    EnvelopeSimple,
    GithubLogo,
    LinkedinLogo,
    XLogo,
} from "@phosphor-icons/react/ssr";

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/#contact" },
];

const footerLinkClass =
    "w-fit text-[11px] leading-5 font-medium text-[#3b2029] no-underline transition-colors hover:text-[#170d10]";

const socialLinks = [
    {
        label: "Email",
        href: "mailto:mohit.sharma80805@gmail.com",
        icon: EnvelopeSimple,
        rotation: "-rotate-[4deg]",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/mohit-sharma-432939271",
        icon: LinkedinLogo,
        rotation: "rotate-[3deg]",
    },
    {
        label: "GitHub",
        href: "https://github.com/madvillax",
        icon: GithubLogo,
        rotation: "-rotate-[2deg]",
    },
    {
        label: "X",
        href: "https://x.com/madvillax",
        icon: XLogo,
        rotation: "rotate-[4deg]",
    },
];

type FooterProps = {
    wordmarkColor?: string;
};

export default function Footer({ wordmarkColor = "#1C6146" }: FooterProps) {
    return (
        <footer className="border-t border-line bg-surface text-[#241217]">
            <div className="overflow-hidden rounded-l-[clamp(120px,16vw,220px)] bg-[#f4b8c8] max-[760px]:rounded-l-[64px]">
                <div className="pr-9 pl-[clamp(72px,8vw,112px)] pt-9 max-[760px]:pr-5 max-[760px]:pl-9 max-[760px]:pt-7">
                    <div className="grid grid-cols-[180px_minmax(0,680px)] items-start justify-between gap-10 max-[900px]:grid-cols-[140px_minmax(0,1fr)] max-[760px]:grid-cols-1">
                        <nav className="max-w-[180px]" aria-label="Footer navigation">
                            <ul className="m-0 grid list-none gap-0.5 p-0">
                                {navigationLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link className={footerLinkClass} href={link.href}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="mx-auto w-full max-w-[650px]">
                            <article className="relative overflow-hidden rounded-tl-[28px] rounded-tr-[8px] rounded-br-[28px] rounded-bl-[8px] border border-white/10 bg-[#191315] p-7 text-[#fff8fa] shadow-[0_18px_45px_rgba(83,39,51,0.2)] max-[520px]:p-5">
                                <div className="absolute top-0 left-0 h-full w-1.5 bg-[#1C6146]" />
                                <div className="mb-7 flex items-center justify-between gap-4 max-[520px]:mb-5">
                                    <p className="m-0 font-mono text-[10px] font-semibold tracking-[0.12em] text-[#c7bec2] uppercase">
                                        A note from Mohit
                                    </p>
                                    <span className="size-2 rounded-full bg-[#f4b8c8]" aria-hidden="true" />
                                </div>
                                <div className="grid grid-cols-[1.05fr_0.95fr] gap-8 max-[620px]:grid-cols-1 max-[620px]:gap-5">
                                    <p className="m-0 max-w-[300px] font-sans text-[clamp(25px,3.5vw,42px)] leading-[0.98] font-semibold tracking-[-0.055em]">
                                        Hi, thank you for being here &lt;3
                                    </p>
                                    <div className="grid content-between gap-4 border-l border-white/12 pl-6 text-[13px] leading-[1.45] text-[#d9d0d4] max-[620px]:border-t max-[620px]:border-l-0 max-[620px]:pt-5 max-[620px]:pl-0">
                                        <p className="m-0">
                                            I build full-stack products and explore AI. I care
                                            about useful ideas and the small details.
                                        </p>
                                        <a
                                            className="w-fit text-[12px] font-semibold text-[#fff8fa] underline decoration-[#f4b8c8] decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                                            href="mailto:mohit.sharma80805@gmail.com"
                                        >
                                            Say hello if you want to build something together.
                                        </a>
                                    </div>
                                </div>
                            </article>

                            <nav
                                className="relative z-[1] -mt-5 grid grid-cols-[repeat(4,96px)] items-end justify-end gap-1.5 px-4 max-[520px]:-mt-3 max-[520px]:grid-cols-[repeat(4,72px)] max-[520px]:gap-0 max-[520px]:px-1"
                                aria-label="Social profiles"
                            >
                                {socialLinks.map(({ href, icon: Icon, label, rotation }) => (
                                    <a
                                        className={`${rotation} -ml-1 grid aspect-square place-items-center rounded-[16px] border-[4px] border-[#fff8fa] bg-black text-white no-underline shadow-[0_10px_20px_rgba(83,39,51,0.18)] transition-transform hover:-translate-y-2 hover:rotate-0 active:scale-[0.96] first:ml-0 max-[520px]:rounded-[12px] max-[520px]:border-[3px]`}
                                        href={href}
                                        key={label}
                                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                                        target={href.startsWith("http") ? "_blank" : undefined}
                                        aria-label={label}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                            className="size-6 max-[520px]:size-5"
                                            weight="fill"
                                        />
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="mt-[clamp(20px,3vw,40px)] flex justify-end pb-4" aria-hidden="true">
                        <p
                            className="m-0 font-sans text-[clamp(96px,19vw,260px)] leading-[0.7] font-black tracking-[-0.105em] whitespace-nowrap"
                            style={{ color: wordmarkColor }}
                        >
                            mohit
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
