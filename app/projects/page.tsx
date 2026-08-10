import type { Metadata } from "next";
import Link from "next/link";
import { ProjectList } from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Mohit Sharma",
    description: "Selected AI, full-stack, and frontend projects by Mohit Sharma.",
};

export default function ProjectsPage() {
    return (
        <div className="page-content project-page">
            <header className="page-intro section-boundary">
                <Link className="back-link" href="/"><span aria-hidden="true">←</span> Home</Link>
                <p className="eyebrow">Work index</p>
                <h1>Projects</h1>
                <p>A focused collection of AI products, developer tools, and full-stack experiments.</p>
            </header>

            <section className="projects-section section-boundary" aria-label="Project list">
                <ProjectList items={projects} />
            </section>

            <section className="project-contact section-boundary" aria-labelledby="project-contact-title">
                <div>
                    <p className="eyebrow">Available for thoughtful work</p>
                    <h2 id="project-contact-title">Want to build something together?</h2>
                </div>
                <a className="button button-primary" href="mailto:mohit.sharma80805@gmail.com">
                    Send an email <span aria-hidden="true">↗</span>
                </a>
            </section>
        </div>
    );
}
