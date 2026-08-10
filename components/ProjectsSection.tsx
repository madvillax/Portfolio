import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function hasLink(value: string) {
    return value.startsWith("http");
}

function projectAddress(project: Project) {
    const url = hasLink(project.link)
        ? project.link
        : hasLink(project.github)
            ? project.github
            : null;

    if (!url) return project.title.toLowerCase().replace(/\s+/g, "");

    return new URL(url).hostname.replace(/^www\./, "");
}

export function ProjectList({ items }: { items: Project[] }) {
    return (
        <div className="project-grid">
            {items.map((project, index) => {
                const primaryLink = hasLink(project.link) ? project.link : null;
                const sourceLink = hasLink(project.github) && project.github !== project.link
                    ? project.github
                    : null;

                return (
                    <article className="project-browser-card" key={project.id}>
                        {primaryLink || sourceLink ? (
                            <a
                                className="project-preview"
                                href={primaryLink ?? sourceLink ?? undefined}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${project.title}`}
                            >
                                <BrowserPreview index={index} address={projectAddress(project)} />
                            </a>
                        ) : (
                            <div className="project-preview">
                                <BrowserPreview index={index} address={projectAddress(project)} />
                            </div>
                        )}

                        <div className="project-browser-copy">
                            <h3>
                                {primaryLink ? (
                                    <a href={primaryLink} target="_blank" rel="noreferrer">
                                        {project.title}<span aria-hidden="true">↗</span>
                                    </a>
                                ) : project.title}
                            </h3>
                            <p>{project.description}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

function BrowserPreview({ index, address }: { index: number; address: string }) {
    return (
        <>
            <div className="browser-toolbar" aria-hidden="true">
                <span className="browser-dots"><i /><i /><i /></span>
                <span className="browser-address">https://{address}</span>
            </div>
            <div className={`project-atlas-preview project-atlas-preview-${index + 1}`} />
        </>
    );
}

export default function ProjectsSection() {
    return (
        <section className="projects-section section-boundary" id="work" aria-labelledby="selected-projects">
            <div className="section-title-row">
                <span className="section-mark" aria-hidden="true">↗</span>
                <div>
                    <h2 id="selected-projects">Projects</h2>
                    <p>AI products, developer tools, and interfaces built around real problems.</p>
                </div>
                <Link className="section-link" href="/projects">All projects <span aria-hidden="true">→</span></Link>
            </div>
            <ProjectList items={projects} />
        </section>
    );
}
