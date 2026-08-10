import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function hasLink(value: string) {
    return value.startsWith("http");
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
                    <article
                        className={`project-card${index === 0 ? " project-card-featured" : ""}`}
                        key={project.id}
                    >
                        <div className="project-kicker">
                            <span>{project.category.join(" / ")}</span>
                            <span>{project.year}</span>
                        </div>

                        <h3>
                            {primaryLink ? (
                                <a href={primaryLink} target="_blank" rel="noreferrer">
                                    {project.title}<span aria-hidden="true">↗</span>
                                </a>
                            ) : project.title}
                        </h3>
                        <p>{project.description}</p>

                        <ul className="project-tech" aria-label={`${project.title} technologies`}>
                            {project.tech.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>

                        {sourceLink ? (
                            <a className="source-link" href={sourceLink} target="_blank" rel="noreferrer">
                                View source <span aria-hidden="true">↗</span>
                            </a>
                        ) : null}
                    </article>
                );
            })}
        </div>
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
