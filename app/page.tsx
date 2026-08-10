import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";

const stack = [
    { label: "Core", tools: "TypeScript, Python, React, Next.js, Redux" },
    { label: "Backend", tools: "Bun.js, Node.js, FastAPI, SQLite, Turso, Drizzle, Postgres" },
    { label: "AI systems", tools: "Vercel AI SDK, Trigger.dev, Vercel eve, mastra" },
    { label: "Interface", tools: "Tailwind CSS, base-ui," },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/madvillax" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma-432939271" },
    { label: "X", href: "https://x.com/madvillax" },
    { label: "Email", href: "mailto:mohit.sharma80805@gmail.com" },
];

export default function Home() {
    return (
        <div>
            <section className="border-b border-line px-9 pt-[46px] pb-[38px] max-[760px]:px-5 max-[760px]:pt-[34px] max-[760px]:pb-[30px]" aria-labelledby="intro-title">
                <h1 className="m-0 max-w-[650px] font-sans text-[clamp(22px,3vw,27px)] leading-[1.24] font-semibold tracking-[-0.04em]" id="intro-title">“Living life as an artist is a practice. You are either engaging in the practice or you’re not.” — Rick Rubin</h1>

                <p className="mt-[25px] mb-0 max-w-[1320px] text-[clamp(17px,1.45vw,22px)] leading-[1.45] text-muted">
                    Hi, my name is Mohit and I’m a Full-Stack Developer. Aside from Fullstack, I love understanding more and more about AI and Deep Learning. I’m more of a curator than a creator. I think I have a pretty good taste in design because I consume a lot of artistic stuff and always find myself noticing the small details. Other than tech, I love hip-hop and cinema. I listen to a lot of music and watch a lot of movies.
                </p>

                <p className="mt-[21px] mb-0 max-w-[620px] text-[13px] text-muted">
                    I can help scope the product, build the first version, or take ownership of the next stage.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-[9px] max-[760px]:items-start">
                    <Link className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-[4px] border border-ink bg-ink px-[13px] py-[7px] text-[11px] font-bold text-button-ink no-underline transition-opacity hover:opacity-80 active:scale-[0.98] max-[390px]:px-[11px]" href="/projects">View projects</Link>
                    <a className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-[4px] border border-strong-line bg-surface px-[13px] py-[7px] text-[11px] font-bold text-ink no-underline transition-opacity hover:opacity-80 active:scale-[0.98] max-[390px]:px-[11px]" href="mailto:mohit.sharma80805@gmail.com">Email me</a>
                    <span className="inline-flex min-h-[34px] items-center gap-[7px] px-[5px] text-[10px] font-semibold text-muted"><span className="size-[7px] rounded-full bg-status shadow-[0_0_0_3px_color-mix(in_srgb,var(--status)_16%,transparent)]" aria-hidden="true" />Open to remote work</span>
                </div>

                <nav className="mt-7 flex flex-wrap gap-3.5 border-t border-line pt-[17px]" aria-label="Social links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                            className="text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink"
                        >
                            {link.label}<span className="ml-1 text-faint" aria-hidden="true">↗</span>
                        </a>
                    ))}
                </nav>
            </section>

            <section className="border-b border-line px-9 py-[42px] max-[760px]:px-5" id="experience" aria-labelledby="experience-title">
                <div className="mb-[26px] grid grid-cols-[32px_minmax(0,1fr)] items-start gap-[13px]">
                    <span className="grid size-8 place-items-center rounded-[2px] border border-line bg-surface-soft font-sans text-[13px]" aria-hidden="true">@</span>
                    <div>
                        <h2 className="m-0 font-sans text-[17px] leading-[1.25] font-semibold tracking-[-0.03em]" id="experience-title">Experience</h2>
                        <p className="mt-1 mb-0 text-[11px] text-muted">A short record of the teams I have worked with.</p>
                    </div>
                </div>

                <article className="grid grid-cols-[minmax(0,1fr)_minmax(180px,0.7fr)] items-start gap-6 rounded-[4px] border border-line bg-surface-soft p-[18px] max-[760px]:grid-cols-1 max-[760px]:gap-4">
                    <div>
                        <h3 className="m-0 font-sans text-lg leading-[1.2] font-semibold tracking-[-0.03em]">Frontend Developer</h3>
                        <p className="mt-[7px] mb-0 text-[11px] font-bold text-muted">@moonshift</p>
                    </div>
                    <p className="m-0 text-[11px] leading-[1.55] text-muted">Frontend product development at Moonshift.</p>
                </article>
            </section>

            <ProjectsSection />

            <section className="border-b border-line px-9 py-[42px] max-[760px]:px-5" aria-labelledby="stack-title">
                <div className="mb-[26px] grid grid-cols-[32px_minmax(0,1fr)] items-start gap-[13px]">
                    <span className="grid size-8 place-items-center rounded-[2px] border border-line bg-surface-soft font-sans text-[13px]" aria-hidden="true">+</span>
                    <div>
                        <h2 className="m-0 font-sans text-[17px] leading-[1.25] font-semibold tracking-[-0.03em]" id="stack-title">Working stack</h2>
                        <p className="mt-1 mb-0 text-[11px] text-muted">Tools I use to move from idea to shipped product.</p>
                    </div>
                </div>
                <dl className="m-0 grid grid-cols-2 border-t border-l border-line max-[760px]:grid-cols-1">
                    {stack.map((group) => (
                        <div className="min-h-[90px] border-r border-b border-line p-4" key={group.label}>
                            <dt className="text-[9px] font-bold tracking-[0.06em] text-faint uppercase">{group.label}</dt>
                            <dd className="mt-[11px] mb-0 text-[11px] leading-[1.55] text-muted">{group.tools}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="border-b border-line px-9 py-[42px] max-[760px]:px-5" id="contact" aria-labelledby="contact-title">
                <p className="mt-0 mb-[9px] text-[9px] font-bold tracking-[0.08em] text-faint uppercase">Have a project in mind?</p>
                <h2 className="m-0 max-w-[520px] font-sans text-[25px] leading-[1.25] font-semibold tracking-[-0.04em]" id="contact-title">Let&apos;s make the next useful thing.</h2>
                <p className="mt-3 mb-[21px] max-w-[520px] text-xs text-muted">Tell me what you are building, where it is stuck, and what a good outcome looks like.</p>
                <a className="inline-flex min-h-[34px] items-center justify-center gap-1.5 rounded-[4px] border border-ink bg-ink px-[13px] py-[7px] text-[11px] font-bold text-button-ink no-underline transition-opacity hover:opacity-80 active:scale-[0.98] max-[390px]:px-[11px]" href="mailto:mohit.sharma80805@gmail.com">
                    Start a conversation <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
}
