import Link from "next/link";
import Image from "next/image";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr/EnvelopeSimple";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import { XLogo } from "@phosphor-icons/react/dist/ssr/XLogo";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr/ArrowRight";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import ProjectsSection from "@/components/ProjectsSection";
import GitHubContributions from "@/components/GitHubContributions";
import WorkingStack from "@/components/WorkingStack";

const socialLinks = [
    { label: "Email", href: "mailto:mohit.sharma80805@gmail.com", icon: EnvelopeSimple, className: "text-ink" },
    { label: "GitHub", href: "https://github.com/madvillax", icon: GithubLogo, className: "social-logo--mono" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma-432939271", icon: LinkedinLogo, className: "text-[#0a66c2]" },
    { label: "X", href: "https://x.com/madvillax", icon: XLogo, className: "social-logo--mono" },
];

export default function Home() {
    return (
        <div>
            <section className="border-b border-line px-9 pt-14 pb-12 max-[760px]:px-5 max-[760px]:pt-9 max-[760px]:pb-10" aria-labelledby="intro-title">
                <h1 className="intro-rise relative m-0 max-w-[760px] font-sans text-[clamp(23px,2.6vw,32px)] leading-[1.22] font-semibold tracking-[-0.04em] text-balance" id="intro-title"><span className="absolute right-full" aria-hidden="true">“</span>Living life as an artist is a practice. You are either engaging in the practice or you’re not.”</h1>
                <p className="intro-rise mt-3 mb-0 text-[13px] font-medium text-faint" style={{ "--i": 1 } as React.CSSProperties}>Rick Rubin</p>

                <p className="intro-rise mt-8 mb-0 max-w-[62ch] text-[clamp(16px,1.3vw,19px)] leading-[1.6] text-muted text-pretty" style={{ "--i": 2 } as React.CSSProperties}>
                    Hi, my name is Mohit and I’m a Full-Stack Developer. Aside from Fullstack, I love understanding more and more about AI and Deep Learning. I’m more of a curator than a creator. I think I have a pretty good taste in design because I consume a lot of artistic stuff and always find myself noticing the small details. Other than tech, I love hip-hop and cinema. I listen to a lot of music and watch a lot of movies.
                </p>

                <p className="intro-rise mt-5 mb-0 max-w-[62ch] text-[14px] leading-[1.55] text-ink/80 text-pretty" style={{ "--i": 3 } as React.CSSProperties}>
                    I can help scope the product, build the first version, or take ownership of the next stage.
                </p>

                <div className="intro-rise mt-7 flex flex-wrap items-center gap-2.5" style={{ "--i": 4 } as React.CSSProperties}>
                    <Link className="btn btn--primary" href="/projects">View projects <ArrowRight className="btn__arrow btn__arrow--right" size={14} aria-hidden="true" /></Link>
                    <a className="btn" href="mailto:mohit.sharma80805@gmail.com">Email me</a>
                    <span className="ml-1.5 inline-flex min-h-10 items-center gap-2 text-[12px] font-medium text-muted"><span className="size-[7px] rounded-full bg-status shadow-[0_0_0_3px_color-mix(in_srgb,var(--status)_16%,transparent)]" aria-hidden="true" />Open to remote work</span>
                </div>

                <nav className="intro-rise mt-9 flex flex-wrap gap-2 border-t border-line pt-5" style={{ "--i": 5 } as React.CSSProperties} aria-label="Social links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            aria-label={link.label}
                            title={link.label}
                            className={`inline-flex size-11 items-center justify-center rounded-lg border border-line bg-surface no-underline transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-strong-line hover:bg-surface-soft active:scale-[0.96] motion-reduce:transition-none ${link.className}`}
                        >
                            {link.label === "GitHub" ? (
                                <span className="size-[22px] bg-current [mask:url('/github-mark.svg')_center/contain_no-repeat]" aria-hidden="true" />
                            ) : (
                                <link.icon size={22} weight={link.label === "LinkedIn" ? "fill" : "regular"} aria-hidden="true" />
                            )}
                        </a>
                    ))}
                </nav>
                <GitHubContributions />
            </section>

            <section className="section reveal" id="experience" aria-labelledby="experience-title">
                <div className="mb-7">
                    <h2 className="section-title" id="experience-title">Experience</h2>
                    <p className="section-lede">Current role, focused on frontend product work.</p>
                </div>

                <article className="grid grid-cols-[88px_minmax(0,1fr)] items-start gap-6 rounded-lg border border-line p-6 max-[760px]:grid-cols-1 max-[760px]:gap-4 max-[760px]:p-5">
                    <span className="grid size-[88px] place-items-center rounded-lg border border-line bg-surface-soft max-[760px]:size-16">
                        <Image
                            className="theme-invert size-14 object-contain max-[760px]:size-10"
                            src="/moonshift-icon-white.svg"
                            alt="Moonshift logo"
                            width={56}
                            height={56}
                        />
                    </span>
                    <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                            <h3 className="m-0 font-sans text-[19px] leading-[1.2] font-semibold tracking-[-0.03em]">Frontend Developer</h3>
                            <a className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted no-underline transition-colors hover:text-ink" href="https://moonshift.io/" target="_blank" rel="noreferrer">
                                Moonshift <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={13} aria-hidden="true" />
                            </a>
                        </div>
                        <p className="mt-2.5 mb-0 max-w-[60ch] text-[14px] leading-[1.6] text-muted">Building product interfaces for Moonshift, an AI app builder that turns a plain-language prompt into a deployed web app.</p>
                        <ul className="mt-5 mb-0 flex flex-wrap gap-2 p-0 text-[12px] font-medium text-muted" aria-label="Frontend focus areas">
                            <li className="list-none rounded-full border border-line px-3 py-1">Product UI</li>
                            <li className="list-none rounded-full border border-line px-3 py-1">Dashboard flows</li>
                            <li className="list-none rounded-full border border-line px-3 py-1">Build and launch flows</li>
                        </ul>
                    </div>
                </article>
            </section>

            <ProjectsSection />

            <WorkingStack />

            <section className="section reveal py-16 max-[760px]:py-12" id="contact" aria-labelledby="contact-title">
                <p className="eyebrow">Have a project in mind?</p>
                <h2 className="section-title max-w-[18ch] text-[clamp(28px,3.4vw,40px)] leading-[1.1] text-balance" id="contact-title">Let&apos;s make the next useful thing.</h2>
                <p className="section-lede mt-4 mb-7 text-[15px]">Tell me what you are building, where it is stuck, and what a good outcome looks like.</p>
                <a className="btn btn--primary" href="mailto:mohit.sharma80805@gmail.com">
                    Start a conversation <ArrowUpRight className="btn__arrow" size={14} aria-hidden="true" />
                </a>
            </section>
        </div>
    );
}
