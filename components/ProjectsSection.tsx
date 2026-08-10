import Link from "next/link";
import { projects, type Project } from "@/data/projects";

function hasLink(value: string) {
    return value.startsWith("http");
}

export function ProjectList({ items }: { items: Project[] }) {
    return (
        <div className="project-list">
            {items.map((project) => (
                <article className="project-row" key={project.id}>
                    <div className="project-copy">
                        <div className="project-title-row">
                            <h3>{project.title}</h3>
                            <span>{project.year}</span>
                        </div>
                        <p>{project.description}</p>
                        <ul className="project-meta" aria-label={`${project.title} technologies`}>
                            {project.tech.map((technology) => (
                                <li key={technology}>{technology}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="project-actions">
                        {hasLink(project.link) ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                Open project <span aria-hidden="true">↗</span>
                            </a>
                        ) : null}
                        {hasLink(project.github) && project.github !== project.link ? (
                            <a href={project.github} target="_blank" rel="noreferrer">
                                Source <span aria-hidden="true">↗</span>
                            </a>
                        ) : null}
                    </div>
                </article>
            ))}
        </div>
    );
}

export default function ProjectsSection() {
    return (
        <section className="content-section" aria-labelledby="selected-projects">
            <div className="section-heading">
                <span aria-hidden="true">##</span>
                <h2 id="selected-projects">Selected projects</h2>
            </div>
            <ProjectList items={projects.slice(0, 3)} />
            <Link className="text-link section-link" href="/projects">
                View every project <span aria-hidden="true">→</span>
            </Link>
        </section>
    );
}
