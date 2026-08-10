import type { Metadata } from "next";
import Link from "next/link";
import { ProjectList } from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
    title: "Projects",
    description: "Selected AI, full-stack, and frontend projects by Mohit Sharma.",
};

export default function ProjectsPage() {
    return (
        <div className="page-shell page-content project-page">
            <header className="page-intro">
                <Link className="back-link" href="/">
                    <span aria-hidden="true">←</span> Home
                </Link>
                <div className="section-heading">
                    <span aria-hidden="true">#</span>
                    <h1>Projects</h1>
                </div>
                <p>
                    A working index of AI products, developer tools, and full-stack experiments.
                </p>
            </header>

            <ProjectList items={projects} />

            <section className="project-contact" aria-labelledby="project-contact-title">
                <h2 id="project-contact-title">Want to build something together?</h2>
                <a className="text-link" href="mailto:mohit.sharma80805@gmail.com">
                    Send me an email <span aria-hidden="true">→</span>
                </a>
            </section>
        </div>
    );
}
