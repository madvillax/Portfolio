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
        <div className="mx-auto grid w-full max-w-[820px] grid-cols-2 gap-3 max-[760px]:grid-cols-1">
            {items.map((project, index) => {
                const primaryLink = hasLink(project.link) ? project.link : null;
                const sourceLink = hasLink(project.github) && project.github !== project.link
                    ? project.github
                    : null;

                return (
                    <article className="overflow-hidden rounded-[15px] border border-line bg-surface transition-[transform,border-color] duration-180 ease-out hover:-translate-y-0.5 hover:border-strong-line motion-reduce:transition-none" key={project.id}>
                        {primaryLink || sourceLink ? (
                            <a
                                className="block border-b border-line bg-surface-soft p-1 pb-0 text-inherit no-underline"
                                href={primaryLink ?? sourceLink ?? undefined}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Open ${project.title}`}
                            >
                                <BrowserPreview index={index} address={projectAddress(project)} />
                            </a>
                        ) : (
                            <div className="border-b border-line bg-surface-soft p-1 pb-0">
                                <BrowserPreview index={index} address={projectAddress(project)} />
                            </div>
                        )}

                        <div className="min-h-[88px] px-3.5 pt-3 pb-3.5 max-[760px]:min-h-0 max-[760px]:p-3.5">
                            <h3 className="m-0 font-sans text-base leading-[1.2] font-semibold tracking-[-0.035em]">
                                {primaryLink ? (
                                    <a className="no-underline" href={primaryLink} target="_blank" rel="noreferrer">
                                        {project.title}<span className="ml-1 text-faint" aria-hidden="true">↗</span>
                                    </a>
                                ) : project.title}
                            </h3>
                            <p className="mt-1.5 mb-0 text-[10px] leading-[1.5] text-muted">{project.description}</p>
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
            <div className="flex min-h-[23px] items-center gap-1.5 rounded-t-[10px] border border-b-0 border-line bg-surface px-1.5 py-[3px]" aria-hidden="true">
                <span className="flex shrink-0 gap-[3px]"><i className="size-1.5 rounded-full bg-[#ff5f57]" /><i className="size-1.5 rounded-full bg-[#febc2e]" /><i className="size-1.5 rounded-full bg-[#28c840]" /></span>
                <span className="min-w-0 truncate rounded-full border border-line px-1.5 py-[3px] text-[7px] leading-[1.1] font-semibold text-faint">https://{address}</span>
            </div>
            <div
                className="aspect-[16/7.4] border border-b-0 border-line bg-[#101010] bg-[url('/projects-atlas.png')] bg-[length:200%_300%] bg-no-repeat"
                style={{ backgroundPosition: ["0 0", "100% 0", "0 50%", "100% 50%", "0 100%"][index] ?? "100% 100%" }}
            />
        </>
    );
}

export default function ProjectsSection() {
    return (
        <section className="border-b border-line px-9 py-[42px] max-[760px]:px-5" id="work" aria-labelledby="selected-projects">
            <div className="mb-[26px] grid grid-cols-[32px_minmax(0,1fr)_auto] items-start gap-[13px] max-[760px]:grid-cols-[32px_minmax(0,1fr)]">
                <span className="grid size-8 place-items-center rounded-[2px] border border-line bg-surface-soft font-sans text-[13px]" aria-hidden="true">↗</span>
                <div>
                    <h2 className="m-0 font-sans text-[17px] leading-[1.25] font-semibold tracking-[-0.03em]" id="selected-projects">Projects</h2>
                    <p className="mt-1 mb-0 text-[11px] text-muted">AI products, developer tools, and interfaces built around real problems.</p>
                </div>
                <Link className="mt-[3px] text-[10px] font-bold text-muted no-underline transition-colors hover:text-ink max-[760px]:col-start-2 max-[760px]:mt-0" href="/projects">All projects <span aria-hidden="true">→</span></Link>
            </div>
            <ProjectList items={projects} />
        </section>
    );
}
