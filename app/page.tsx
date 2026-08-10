import Image from "next/image";
import Link from "next/link";
import ProjectsSection from "@/components/ProjectsSection";

const capabilities = [
    "AI product engineering",
    "Full-stack web applications",
    "Agent systems and workflows",
    "Product-minded frontend development",
];

export default function Home() {
    return (
        <div className="page-shell page-content">
            <section className="hero" aria-labelledby="intro-title">
                <Image
                    className="profile-image"
                    src="/profile.jpg"
                    alt="Mohit Sharma's profile artwork"
                    width={112}
                    height={112}
                    priority
                />

                <h1 id="intro-title">
                    Hi, I&apos;m Mohit. I build useful AI products and full-stack systems.
                </h1>
                <p className="hero-summary">
                    I turn ambitious ideas into clear, dependable software from model orchestration to the final interface.
                </p>

                <div className="hero-links" aria-label="Introduction links">
                    <Link className="primary-link" href="/projects">
                        See my projects <span aria-hidden="true">→</span>
                    </Link>
                    <a className="text-link" href="mailto:mohit.sharma80805@gmail.com">
                        Start a conversation
                    </a>
                </div>
            </section>

            <section className="content-section about-grid" aria-labelledby="about-title">
                <div>
                    <div className="section-heading">
                        <span aria-hidden="true">##</span>
                        <h2 id="about-title">About</h2>
                    </div>
                    <p className="body-copy">
                        I work across the stack, with a focus on AI-native products that feel practical, fast, and easy to use. I care about clean APIs, thoughtful interfaces, and systems that hold up beyond the demo.
                    </p>
                    <p className="location-note">Based in New Delhi, India. Open to remote collaboration.</p>
                </div>

                <div className="capability-block">
                    <h3>What I work on</h3>
                    <ul>
                        {capabilities.map((capability) => (
                            <li key={capability}>{capability}</li>
                        ))}
                    </ul>
                </div>
            </section>

            <ProjectsSection />

            <section className="contact-section" aria-labelledby="contact-title">
                <div className="section-heading">
                    <span aria-hidden="true">##</span>
                    <h2 id="contact-title">Contact</h2>
                </div>
                <p>Have a product idea, an AI integration challenge, or a role in mind?</p>
                <a className="contact-email" href="mailto:mohit.sharma80805@gmail.com">
                    mohit.sharma80805@gmail.com <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
}
