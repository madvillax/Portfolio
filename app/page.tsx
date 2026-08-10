import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";

const stack = [
    { label: "Core", tools: "TypeScript, Python, React, Next.js" },
    { label: "Backend", tools: "Node.js, Express, FastAPI, SQLite, Firestore" },
    { label: "AI systems", tools: "Gemini, machine learning, agent workflows" },
    { label: "Interface", tools: "Tailwind CSS, Globe.gl, Google Maps API" },
];

const socialLinks = [
    { label: "GitHub", href: "https://github.com/madvillax" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-sharma-432939271" },
    { label: "X", href: "https://x.com/madvillax" },
    { label: "Email", href: "mailto:mohit.sharma80805@gmail.com" },
];

export default function Home() {
    return (
        <div className="page-content">
            <section className="hero-section section-boundary" aria-labelledby="intro-title">
                <h1 id="intro-title">I turn AI product ideas into dependable software.</h1>

                <ul className="hero-points">
                    <li>I build AI-native products and agent systems end to end with TypeScript, Python, and Next.js.</li>
                    <li>I work across orchestration, APIs, product interfaces, and deployment.</li>
                    <li>I care about software that stays useful after the demo.</li>
                </ul>

                <p className="hero-summary">
                    I can help scope the product, build the first version, or take ownership of the next stage.
                </p>

                <div className="hero-actions">
                    <Link className="button button-primary" href="/projects">View projects</Link>
                    <a className="button button-secondary" href="mailto:mohit.sharma80805@gmail.com">Email me</a>
                    <span className="availability"><span aria-hidden="true" />Open to remote work</span>
                </div>

                <nav className="social-links" aria-label="Social links">
                    {socialLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith("http") ? "_blank" : undefined}
                            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                        >
                            {link.label}<span aria-hidden="true">↗</span>
                        </a>
                    ))}
                </nav>
            </section>

            <section className="experience-section section-boundary" id="experience" aria-labelledby="experience-title">
                <div className="section-title-row">
                    <span className="section-mark" aria-hidden="true">@</span>
                    <div>
                        <h2 id="experience-title">Experience</h2>
                        <p>A short record of the teams I have worked with.</p>
                    </div>
                </div>

                <article className="experience-entry">
                    <div>
                        <h3>Frontend Developer</h3>
                        <p className="experience-company">@moonshift</p>
                    </div>
                    <p>Frontend product development at Moonshift.</p>
                </article>
            </section>

            <ProjectsSection />

            <section className="stack-section section-boundary" aria-labelledby="stack-title">
                <div className="section-title-row">
                    <span className="section-mark" aria-hidden="true">+</span>
                    <div>
                        <h2 id="stack-title">Working stack</h2>
                        <p>Tools I use to move from idea to shipped product.</p>
                    </div>
                </div>
                <dl className="stack-grid">
                    {stack.map((group) => (
                        <div key={group.label}>
                            <dt>{group.label}</dt>
                            <dd>{group.tools}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="contact-section section-boundary" id="contact" aria-labelledby="contact-title">
                <p className="eyebrow">Have a project in mind?</p>
                <h2 id="contact-title">Let&apos;s make the next useful thing.</h2>
                <p>Tell me what you are building, where it is stuck, and what a good outcome looks like.</p>
                <a className="button button-primary" href="mailto:mohit.sharma80805@gmail.com">
                    Start a conversation <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
}
