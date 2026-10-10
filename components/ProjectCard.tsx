import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr/ArrowUpRight";
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo";
import type { Project } from "@/data/projects";

function hasLink(value: string) {
    return value.startsWith("http");
}

export default function ProjectCard({ project, lead = false }: { project: Project; lead?: boolean }) {
    const primaryLink = hasLink(project.link) ? project.link : null;
    const sourceLink = hasLink(project.github) && project.github !== project.link ? project.github : null;
    const destination = primaryLink ?? sourceLink;
    const preview = (
        <div className="project-card__image">
            {project.image ? (
                <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 760px) calc(100vw - 80px), (max-width: 1280px) 40vw, 560px"
                    className="object-contain"
                />
            ) : null}
        </div>
    );

    return (
        <article className={`project-card${lead ? " project-card--lead" : ""}`}>
            <div className="project-card__media">
                {destination ? (
                    <a className="block no-underline" href={destination} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
                        {preview}
                    </a>
                ) : preview}
            </div>

            <div className="project-card__body">
                <div className="project-card__details">
                    <p className="project-card__category">{project.category.join(" / ")}</p>
                    <h3 className="project-card__title">
                        {destination ? (
                            <a href={destination} target="_blank" rel="noreferrer" className="no-underline">{project.title}</a>
                        ) : project.title}
                    </h3>
                    <p className="project-card__description">{project.description}</p>
                    <ul className="project-card__stack" aria-label={`${project.title} technologies`}>
                        {project.tech.map((technology, index) => <li key={`${technology}-${index}`}>{technology}</li>)}
                    </ul>
                </div>

                <div className="project-card__links">
                    {destination ? (
                        <a className="project-card__link" href={destination} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project`}>
                            View project <ArrowUpRight size={14} weight="regular" aria-hidden="true" />
                        </a>
                    ) : null}
                    {sourceLink ? (
                        <a className="project-card__link project-card__link--source" href={sourceLink} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source on GitHub`}>
                            <GithubLogo size={15} weight="regular" aria-hidden="true" /> GitHub
                        </a>
                    ) : null}
                </div>
            </div>
        </article>
    );
}
